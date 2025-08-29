const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
  owner: {
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
    invitedAt: {
      type: Date,
      default: Date.now
    },
    acceptedAt: Date
  }],
  designs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Design'
  }],
  tags: [{
    type: String,
    trim: true,
    maxlength: 30
  }],
  visibility: {
    type: String,
    enum: ['private', 'team', 'public'],
    default: 'private'
  },
  status: {
    type: String,
    enum: ['draft', 'active', 'archived', 'completed'],
    default: 'draft'
  },
  settings: {
    allowComments: { type: Boolean, default: true },
    allowVersioning: { type: Boolean, default: true },
    allowExport: { type: Boolean, default: true },
    autoSave: { type: Boolean, default: true },
    autoSaveInterval: { type: Number, default: 30000 } // 30 seconds
  },
  metadata: {
    category: String,
    industry: String,
    client: String,
    deadline: Date,
    budget: {
      amount: Number,
      currency: { type: String, default: 'USD' }
    }
  },
  activity: [{
    action: {
      type: String,
      enum: ['created', 'updated', 'shared', 'archived', 'restored']
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    details: String
  }]
}, {
  timestamps: true
});

// Indexes for better query performance
projectSchema.index({ owner: 1, createdAt: -1 });
projectSchema.index({ collaborators: 1 });
projectSchema.index({ tags: 1 });
projectSchema.index({ visibility: 1, status: 1 });

// Virtual for project stats
projectSchema.virtual('designCount').get(function() {
  return this.designs.length;
});

projectSchema.virtual('collaboratorCount').get(function() {
  return this.collaborators.length;
});

// Methods
projectSchema.methods.addCollaborator = function(userId, role = 'viewer') {
  const existingCollaborator = this.collaborators.find(
    c => c.user.toString() === userId.toString()
  );
  
  if (existingCollaborator) {
    existingCollaborator.role = role;
  } else {
    this.collaborators.push({ user: userId, role });
  }
  
  return this.save();
};

projectSchema.methods.removeCollaborator = function(userId) {
  this.collaborators = this.collaborators.filter(
    c => c.user.toString() !== userId.toString()
  );
  return this.save();
};

projectSchema.methods.addActivity = function(action, userId, details = '') {
  this.activity.push({ action, user: userId, details });
  return this.save();
};

projectSchema.methods.isUserCollaborator = function(userId, minRole = 'viewer') {
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
projectSchema.set('toJSON', { virtuals: true });
projectSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Project', projectSchema);
