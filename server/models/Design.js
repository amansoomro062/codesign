const mongoose = require('mongoose');

const designSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 1000
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['viewer', 'editor', 'admin'],
      default: 'viewer'
    },
    lastActive: Date
  }],
  canvas: {
    width: { type: Number, default: 1920 },
    height: { type: Number, default: 1080 },
    backgroundColor: { type: String, default: '#FFFFFF' },
    grid: {
      enabled: { type: Boolean, default: true },
      size: { type: Number, default: 20 },
      color: { type: String, default: '#E5E7EB' }
    }
  },
  layers: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['group', 'shape', 'text', 'image', 'component'],
      required: true
    },
    visible: { type: Boolean, default: true },
    locked: { type: Boolean, default: false },
    opacity: { type: Number, default: 1, min: 0, max: 1 },
    transform: {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      width: { type: Number, default: 100 },
      height: { type: Number, default: 100 },
      rotation: { type: Number, default: 0 },
      scaleX: { type: Number, default: 1 },
      scaleY: { type: Number, default: 1 }
    },
    properties: mongoose.Schema.Types.Mixed, // Shape-specific properties
    children: [mongoose.Schema.Types.Mixed], // For group layers
    metadata: {
      createdAt: { type: Date, default: Date.now },
      createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      lastModified: { type: Date, default: Date.now },
      lastModifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  }],
  components: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    properties: mongoose.Schema.Types.Mixed,
    isLibrary: { type: Boolean, default: false },
    usageCount: { type: Number, default: 0 }
  }],
  styles: {
    colors: [{
      name: String,
      value: String,
      type: { type: String, enum: ['primary', 'secondary', 'accent', 'neutral'] }
    }],
    typography: [{
      name: String,
      fontFamily: String,
      fontSize: Number,
      fontWeight: String,
      lineHeight: Number
    }],
    spacing: [{
      name: String,
      value: Number
    }]
  },
  versions: [{
    version: { type: Number, required: true },
    name: String,
    description: String,
    data: mongoose.Schema.Types.Mixed,
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    thumbnail: String
  }],
  currentVersion: { type: Number, default: 1 },
  status: {
    type: String,
    enum: ['draft', 'in-review', 'approved', 'archived'],
    default: 'draft'
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: 30
  }],
  metadata: {
    category: String,
    industry: String,
    targetAudience: String,
    designSystem: String,
    exportFormats: [String]
  },
  activity: [{
    action: {
      type: String,
      enum: ['created', 'updated', 'shared', 'versioned', 'exported', 'commented']
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    details: String,
    metadata: mongoose.Schema.Types.Mixed
  }],
  settings: {
    autoSave: { type: Boolean, default: true },
    autoSaveInterval: { type: Number, default: 30000 },
    allowComments: { type: Boolean, default: true },
    allowExport: { type: Boolean, default: true },
    allowVersioning: { type: Boolean, default: true },
    collaborationMode: {
      type: String,
      enum: ['real-time', 'conflict-resolution', 'manual-merge'],
      default: 'real-time'
    }
  }
}, {
  timestamps: true
});

// Indexes
designSchema.index({ project: 1, createdAt: -1 });
designSchema.index({ creator: 1, createdAt: -1 });
designSchema.index({ tags: 1 });
designSchema.index({ status: 1 });

// Virtual fields
designSchema.virtual('layerCount').get(function() {
  return this.layers.length;
});

designSchema.virtual('componentCount').get(function() {
  return this.components.length;
});

designSchema.virtual('versionCount').get(function() {
  return this.versions.length;
});

// Methods
designSchema.methods.addLayer = function(layerData) {
  const layer = {
    id: layerData.id || `layer_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: layerData.name || 'New Layer',
    type: layerData.type,
    ...layerData
  };
  
  this.layers.push(layer);
  return this.save();
};

designSchema.methods.updateLayer = function(layerId, updates) {
  const layerIndex = this.layers.findIndex(l => l.id === layerId);
  if (layerIndex === -1) throw new Error('Layer not found');
  
  this.layers[layerIndex] = { ...this.layers[layerIndex], ...updates };
  this.layers[layerIndex].metadata.lastModified = new Date();
  this.layers[layerIndex].metadata.lastModifiedBy = updates.lastModifiedBy;
  
  return this.save();
};

designSchema.methods.createVersion = function(userId, name = '', description = '') {
  const newVersionNumber = this.currentVersion + 1;
  
  const versionData = {
    version: newVersionNumber,
    name: name || `Version ${newVersionNumber}`,
    description,
    data: {
      layers: this.layers,
      components: this.components,
      styles: this.styles,
      canvas: this.canvas
    },
    createdBy: userId
  };
  
  this.versions.push(versionData);
  this.currentVersion = newVersionNumber;
  
  return this.save();
};

designSchema.methods.addActivity = function(action, userId, details = '', metadata = {}) {
  this.activity.push({ action, user: userId, details, metadata });
  return this.save();
};

designSchema.methods.isUserCollaborator = function(userId, minRole = 'viewer') {
  const roles = ['viewer', 'editor', 'admin'];
  const minRoleIndex = roles.indexOf(minRole);
  
  const collaborator = this.collaborators.find(
    c => c.user.toString() === userId.toString()
  );
  
  if (!collaborator) return false;
  
  const collaboratorRoleIndex = roles.indexOf(collaborator.role);
  return collaboratorRoleIndex >= minRoleIndex;
};

// Ensure virtual fields are serialized
designSchema.set('toJSON', { virtuals: true });
designSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Design', designSchema);
