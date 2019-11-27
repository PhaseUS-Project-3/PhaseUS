const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Sprints = require("../models/Sprint");
const Projects = require("../models/Projects");
const Users = require("../models/User");
const getUserId = require("../auth/utils");

// fetch all sprints from a specific project
router.get("/allusers", async (req, res) => {
  try{
    const allusers = await User.find();
    allusers.forEach(user => user.password = "");
    res.json({users:allusers});
   }catch(err){
     res.status(401).json({ message : "Somthing happned"})

   }
})

router.get('/', async (req,res) => {
	try{
		const projectId = req.originalUrl.match(/[0-9A-Fa-f]{24}/)[0];
		console.log(projectId)
		const sprints = await Sprints.find(
			{project_id: projectId}
		)
		res.json({sprints});
	}catch(err){
		res.json({message: err});
	}
});
// fetch specified sprint from a specified project
router.get('/:sprintId', async (req,res) => {
	try{
		const projectId = req.originalUrl.match(/[0-9A-Fa-f]{24}/)[0];
		const sprint = await Sprints.find({
			_id: req.params.sprintId,
		     project_id : projectId
		})
		if(!sprint){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({sprint});
		}
	}catch(err){
		res.json({message: err});
	}
});

//create a new sprint
router.post('/newsprint', async (req, res) => {

		const projectId = req.originalUrl.match(/[0-9A-Fa-f]{24}/)[0];
		let userId = "123456789012345678901234" //getUserId(req); 
		let newSprint = new Sprints({
			name: req.body.name,
			start_date: Date("2017-03-17 11:59"),
			end_date: Date("2017-03-17 11:59"),
			project_id: projectId
		});
		const project = await Projects.update({ _id: projectId },{ $push:{ sprints: { sprint: newSprint._id , tasks: []}} });
		if(!project.nModified){
			res.status(404).json({message: "Project not found"});
		}
		let savedSprint = await newSprint.save();

		res.redirect("/projects/"+projectId+"/sprints")
});

//update a sprint
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

		//testing update
		console.log(updateBody)

		//push task update
		updateBody =  {$set: updateBody}
		
		const path = req.originalUrl.split('/sprints/')
		const sprintId = path[1]
		const projectId = path[0].match(/[0-9A-Fa-f]{24}/)[0];
		console.log(updateBody)

		await Sprints.update(
			{_id: sprintId},
			updateBody,
			{$eq : ["project_id", projectId]}
		)

		const sprint = await Sprints.findById(sprintId);

		if(!sprint){
			res.status(404).json({message: "Item not found"});
		}
		else {
			res.json({message: "Item Updated", sprint});
		}
		
	}catch(err){
		res.json({message: err});
	}
});

//delete a sprint
router.delete('/:sprintId', async (req,res) => {
	try{
		const path = req.originalUrl.split('/sprints/')
		const sprintId = path[1]
		const projectId = path[0].match(/[0-9A-Fa-f]{24}/)[0];

		const sprint = await Sprints.remove(
			{_id: sprintId},
			{$eq : ["project_id", projectId]}
		)
		console.log(sprint)
		if(!sprint.deletedCount){
			res.status(404).json({message: "Item not found"});
		}
		else {
			res.json({message: "Item Deleted", sprint});
		}
	}catch(err){
		res.json({message: err});
	}
});

module.exports = router