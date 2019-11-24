const express = require('express');
const router = express.Router();
const getUserId = require("../auth/utils");
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
	try{
		let newTask = new Task({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            assigned_user: getUserId(req),
            // sprint: req.body.sprint
		})
		savedTask = await newTask.save();
		res.redirect("/task")
	}catch(err){
		res.json({message: err});
	}
});

router.put('/:_id', async (req,res) => {
	try{
		let updateBody = {};

		const task = await Task.findByIdAndUpdate(req.params._id, updatebody);
		if(!task){
			res.status(404).json({message: "Task is not found"});
		}else{
			res.json({message: "Task Updated", task});
		}
	}catch(err){
		res.json({message: err});
	}
});

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