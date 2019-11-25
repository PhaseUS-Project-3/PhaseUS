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
		let userId = "123456789012345678901234" //getUserId(req); 
		let newSprint = new Sprints({
			name: req.body.name,
			start_date: Date("2017-03-17 11:59"),
			end_date: Date("2017-03-17 11:59"),
			project_id: projectId
		});
		const project = await Projects.update({ _id: projectId },{ $push: { sprint: newSprint._id, tasks: [] } });
		if(!project.nMatched){
			res.status(404).json({message: "Project not found"});
		}
		let savedSprint = await newSprint.save();

		res.redirect("/projects/"+projectId+"/sprints")

});

router.put('/:sprintId', async (req,res) => {
	try{
		let updateBody = {};
		//Does set to all data -- fix
		req.body.newName? updateBody.name = req.body.newName: updateBody;

		//update date
		req.body.newStartDate? updateBody.start_date = req.body.newStartDate: updateBody;
		req.body.newEndDate? updateBody.end_date = req.body.newEndDate: updateBody;
		
		//update user
		req.body.newUsers? updateBody.users = req.body.newUsers: updateBody;

		//update task
		req.body.newTask? updateBody.tasks = req.body.newTask: updateBody;

		const update = taskUpdate !== undefined? { $push: { tasks: taskUpdate }, updateBody } : {$set: updateBody}
		const path = req.originalUrl.split('/sprints/')
		const sprintId = path[1]
		const projectId = path[0].match(/[0-9A-Fa-f]{24}/)[0];
		console.log(update)
		console.log("before update")

		await Sprints.update(
			{_id: sprintId},
			{update,
			$set: ["12345678909876543212134"]},
			{$eq : ["project_id", projectId]}
		)
		console.log("after update")
		const sprint = await Sprints.find();

		if(!sprint){
			res.status(404).json({message: "Item not found"});
		}
		else {
			res.json({message: "Item Updated", sprint});
		}
		//update tasks, start_date, end_date

		// const project = await Projects.findByIdAndUpdate(req.params.projectId, updateBody);
		
		// if(!project){
		// 	res.status(404).json({message: "Item not found"});
		// }else{
		// 	res.json({message: "Item Updated", project});
		// }
	}catch(err){
		res.json({message: err});
	}
});

router.delete('/:sprintId', async (req,res) => {
	try{
		const path = req.originalUrl.split('/sprints/')
		const sprintId = path[1]
		const projectId = path[0].match(/[0-9A-Fa-f]{24}/)[0];

		const sprint = await Sprints.remove(
			{_id: sprintId},
			{$eq : ["project_id", projectId]}
		)

		if(!sprint.nRemoved){
			res.status(404).json({message: "Item not found"});
		}
		else {
			res.json({message: "Item Deleted", sprint});
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