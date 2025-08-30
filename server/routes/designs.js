const express = require('express');
const router = express.Router();
const Design = require('../models/Design');
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// Get all designs for a project
router.get('/project/:projectId', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has access to this project
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const designs = await Design.find({ project: req.params.projectId })
      .populate('creator', 'name email')
      .sort({ updatedAt: -1 });
    
    res.json(designs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific design
router.get('/:id', auth, async (req, res) => {
  try {
    const design = await Design.findById(req.params.id)
      .populate('creator', 'name email')
      .populate('project', 'name');
    
    if (!design) {
      return res.status(404).json({ message: 'Design not found' });
    }
    
    // Check if user has access to the project
    const project = await Project.findById(design.project);
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    res.json(design);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new design
router.post('/', auth, async (req, res) => {
  try {
    const { name, projectId, content, metadata } = req.body;
    
    // Check if user has access to the project
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const design = new Design({
      name,
      project: projectId,
      creator: req.user.id,
      content: content || {},
      metadata: metadata || {}
    });
    
    const savedDesign = await design.save();
    res.status(201).json(savedDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a design
router.put('/:id', auth, async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    
    if (!design) {
      return res.status(404).json({ message: 'Design not found' });
    }
    
    // Check if user has access to the project
    const project = await Project.findById(design.project);
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    const updatedDesign = await Design.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedDesign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a design
router.delete('/:id', auth, async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    
    if (!design) {
      return res.status(404).json({ message: 'Design not found' });
    }
    
    // Check if user has access to the project
    const project = await Project.findById(design.project);
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    await Design.findByIdAndDelete(req.params.id);
    res.json({ message: 'Design deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a design version (snapshot)
router.post('/:id/versions', auth, async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    
    if (!design) {
      return res.status(404).json({ message: 'Design not found' });
    }
    
    // Check if user has access to the project
    const project = await Project.findById(design.project);
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    // Create a new version
    const version = {
      content: design.content,
      metadata: design.metadata,
      createdAt: new Date(),
      creator: req.user.id
    };
    
    design.versions.push(version);
    await design.save();
    
    res.json(version);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
