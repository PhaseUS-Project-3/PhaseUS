const express = require('express');
const router = express.Router();
const Projects = require("../models/Projects");
const Users = require("../models/User");
const getUserId = require("../auth/utils");

// fetch all projects
router.get('/', async (req,res) => {
	try{
		const projects = await Projects.find()//.populate('owner');
		// projects.forEach(project => project.owner.password = "");
		res.json({projects});
	}catch(err){
		res.json({message: err});
	}
});
// fetch specified project
router.get('/:projectId', async (req,res) => {
	try{
		const project = await Projects.findById(req.params.projectId);
		if(!project){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({project});
		}
	}catch(err){
		res.json({message: err});
	}
});
//create a project
router.post('/newproject', async (req, res) => {
	try{
		let newProject = new Projects({
			name: req.body.name,
			owner: getUserId(req),
			sprints: req.body.sprints
		})
		savedProject = await newProject.save();
		res.redirect("/projects")
	}catch(err){
		res.json({message: err});
	}
});

router.put('/:projectId', async (req,res) => {
	try{
		let updateBody = {};

		updatebody = req.body.newName? updateBody.name = req.body.newName: updateBody;
		updatebody = req.body.sprints? updateBody.sprints = req.body.sprints: updateBody;
		console.log(req.body.newName, updateBody)
		const project = await Projects.findByIdAndUpdate(req.params.projectId, updatebody);
		if(!project){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({message: "Item Updated", project});
		}
	}catch(err){
		res.json({message: err});
	}
});

router.delete('/:projectId', async (req,res) => {
	try{
		const project = await Projects.findByIdAndDelete(req.params.projectId);
		if(!project){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({message: "Item Deleted", project});
		}
	}catch(err){
		res.json({message: err});
	}
});



module.exports = router