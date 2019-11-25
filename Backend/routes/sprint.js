const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Sprints = require("../models/Sprint");
const Projects = require("../models/Projects");
const Users = require("../models/User");
const getUserId = require("../auth/utils");

// fetch all projects
router.get('/', async (req,res) => {
	try{
		const sprints = await Sprints.find()//.populate('owner');
		// projects.forEach(project => project.owner.password = "");
		res.json({sprints});
	}catch(err){
		res.json({message: err});
	}
});
// fetch specified project
router.get('/:sprintId', async (req,res) => {
	try{
		const sprint = await Sprints.findById(req.params.sprintId);
		if(!sprint){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({sprint});
		}
	}catch(err){
		res.json({message: err});
	}
});
//create a project
router.post('/newsprint', async (req, res) => {

		const projectId = req.originalUrl.match(/[0-9A-Fa-f]{24}/)[0];
		let userId = getUserId(req); 
		let newSprint = new Sprints({
			name: req.body.name,
			start_date: Date("2017-03-17 11:59"),
			end_date: Date("2017-03-17 11:59")
		});
		let savedSprint = await newSprint.save();
		const project = await Projects.update({ _id: projectId },{ $push: { sprint: savedSprint.id } });
		res.redirect("/projects/"+projectId+"/sprints")

});

router.put('/:sprintId', async (req,res) => {
	try{
		let updateBody = {};

		updatebody = req.body.newName? updateBody.name = req.body.newName: updateBody;
		updatebody = req.body.sprints? updateBody.sprints = req.body.sprints: updateBody;
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

// router.delete('/:projectId', async (req,res) => {
// 	try{
// 		const project = await Projects.findByIdAndDelete(req.params.projectId);
// 		if(!project){
// 			res.status(404).json({message: "Item not found"});
// 		}else{
// 			res.json({message: "Item Deleted", project});
// 		}
// 	}catch(err){
// 		res.json({message: err});
// 	}
// });



module.exports = router