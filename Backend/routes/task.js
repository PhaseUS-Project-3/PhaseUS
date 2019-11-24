const express = require('express');
const router = express.Router();
const getUserId = require("../auth/utils");
//const task
const Task = require("../models/Task")

// Comes from TaskSchema 
// name, description, type, assigned_user, sprint

router.get('/', async (req,res) => {
	try{
		const tasks = await Task.find()
		res.json({tasks});
	}catch(err){
		res.json({message: err});
	}
});

router.get('/:taskId', async (req,res) => {
	try{
		const task = await Task.findById(req.params.taskId);
		if(!task){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({task});
		}
	}catch(err){
		res.json({message: err});
	}
});
//create new task
router.post('/newtask', async (req, res) => {
	try{
		let newTask = new Task({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            assigned_user: req.body.assigned_user,
            sprint: req.body.sprint
		})
		savedTask = await newTask.save();
		res.redirect("/task")
	}catch(err){
		res.json({message: err});
	}
});

router.put('/:taskId', async (req,res) => {
	try{
		let updateBody = {};

		const task = await Task.findByIdAndUpdate(req.params.taskId, updatebody);
		if(!task){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({message: "Item Updated", task});
		}
	}catch(err){
		res.json({message: err});
	}
});

router.delete('/:taskId', async (req,res) => {
	try{
		const tasks = await Task.findByIdAndDelete(req.params.taskId);
		if(!tasks){
			res.status(404).json({message: "Item not found"});
		}else{
			res.json({message: "Item Deleted", tasks});
		}
	}catch(err){
		res.json({message: err});
	}
});



module.exports = router