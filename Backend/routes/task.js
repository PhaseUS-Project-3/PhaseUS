const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Sprints = require("../models/Sprint");
const Projects = require("../models/Projects");
const getUserId = require("../auth/utils");
const Task = require("../models/Task")

// Comes from TaskSchema 
// name, description, type, assigned_user, sprint

//get all tasks of a sprint
router.get('/', async (req,res) => {
	try{
		//mine
		const slicedPath = req.originalUrl.split("/sprints/")
		console.log(slicedPath)
		const projectId = slicedPath[0].match(/[0-9A-Fa-f]{24}/)[0];
		const sprintId = slicedPath[1].match(/[0-9A-Fa-f]{24}/)[0];

		console.log(sprintId, projectId)
		//old
		const tasks = await Task.find(
			{project_id: projectId, sprint_id: sprintId}
		)
		console.log(tasks)
		res.json({tasks});
	}catch(err){
		res.json({message: err});
	}
});

//get a specific task
router.get('/:_id', async (req,res) => {
	try{
		const task = await Task.findById(req.params._id);
		if(!task){
			res.status(404).json({message: "Task is not found"});
		}else{
			res.json({task});
		}
	}catch(err){
		res.json({message: err});
	}
});

//create new task
router.post('/newtask', async (req, res) => {
		const slicedPath = req.originalUrl.split("/sprints/")
		const projectId = slicedPath[0].match(/[0-9A-Fa-f]{24}/)[0];
		const sprintId = slicedPath[1].match(/[0-9A-Fa-f]{24}/)[0];
		let userId = getUserId(req); 
		
		let newTask = new Task({
            name: req.body.name,
            description: req.body.description,
			type: req.body.type,
			assigned_user: req.body.assigned_user,
            // assigned_user: getUserId(req),
			sprint_id: sprintId,
			project_id: projectId
		});
		let savedTask = await newTask.save();
		console.log(savedTask)

		res.json(savedTask);

});

//update a task
// name, description, type, assigned_user,
router.put('/:_id', async (req,res) => {
	try{
		let updateBody = {};

		req.body.newName? updateBody.name = req.body.newName: updateBody;
		req.body.newDescription? updateBody.description = req.body.newDescription: updateBody;
		req.body.newType? updateBody.type = req.body.newType: updateBody;
		req.body.newAssignedUser? updateBody.assigned_user = req.body.newAssignedUser: updateBody;
		
		const task = await Task.findByIdAndUpdate(req.params._id, updateBody);
		console.log(updateBody)

		if(!task){
			res.status(404).json({message: "Task is not found"});
		}else{
			res.json({message: "Task Updated", task});
		}
	}catch(err){
		res.json({message: err});
	}
});

//delete a task
router.delete('/:_id', async (req,res) => {
	try{
		const tasks = await Task.findByIdAndDelete(req.params._id);
		if(!tasks){
			res.status(404).json({message: "Task is not found"});
		}else{
			res.json({message: "Task Deleted", tasks});
		}
	}catch(err){
		res.json({message: err});
	}
});

module.exports = router