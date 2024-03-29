const express = require('express');
const router = express.Router();
const Projects = require("../models/Projects");
const Users = require("../models/User");
const getUserId = require("../auth/utils");

// fetch all projects
router.get('/', async (req,res) => {
	try{
		console.log(getUserId(req))
		const projects = await Projects.find(
			{owner: getUserId(req)}
		)//.populate('owner');
		// projects.forEach(project => project.owner.password = "");
		res.json({projects});
	}catch(err){
		res.json({message: err});
	}
});
// fetch specified project
router.get('/:projectId', async (req,res) => {
	try{
		const project = await Projects.find(
			{_id: req.params.projectId},
			{owner: getUserId(req)}
			);
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
		const userId = getUserId(req);
		console.log(userId)
		let newProject = new Projects({
			name: req.body.name,
			owner: userId,
			sprints: req.body.sprints
		});

		savedProject = await newProject.save();
		console.log(savedProject)
		await Users.update(
			{ _id: userId },
			{ $push: { projects: savedProject._id } }
			);
		console.log(savedProject)
		res.json(savedProject)
	}catch(err){
		res.json({message: err});
	}
});

router.put('/:projectId', async (req,res) => {
	try{
		let updateBody = {};

		req.body.newName? updateBody.name = req.body.newName: updateBody;
		req.body.sprints? updateBody.sprints = req.body.sprints: updateBody;
		const project = await Projects.findByIdAndUpdate(req.params.projectId, updateBody);
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