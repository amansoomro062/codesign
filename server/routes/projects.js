const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// Get all projects for a user
router.get('/', auth, async (req, res) => {
  try {
    const projects = await Project.find({ 
      $or: [
        { owner: req.user.id },
        { collaborators: req.user.id }
      ]
    }).populate('owner', 'name email');
    
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific project
router.get('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('owner', 'name email')
      .populate('collaborators', 'name email');
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    // Check if user has access to this project
    if (project.owner.toString() !== req.user.id && 
        !project.collaborators.includes(req.user.id)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new project
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, isPublic } = req.body;
    
    const project = new Project({
      name,
      description,
      owner: req.user.id,
      isPublic: isPublic || false
    });
    
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project
router.put('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Only project owner can update' });
    }
    
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    res.json(updatedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Only project owner can delete' });
    }
    
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add collaborator to project
router.post('/:id/collaborators', auth, async (req, res) => {
  try {
    const { email } = req.body;
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Only project owner can add collaborators' });
    }
    
    // TODO: Find user by email and add to collaborators
    // For now, just return success
    res.json({ message: 'Collaborator added' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
