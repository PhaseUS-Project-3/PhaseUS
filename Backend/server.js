const express = require("express");
const app = express();
// const methodOverride = require('method_override');
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const passport = require('passport');//after you session 
const jwt = require('jsonwebtoken');
const mongooseConnect = require('./helper/mongodb')

//Routes includes
const projectsRoutes = require("./routes/project");
const sprintsRoutes = require("./routes/sprint");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);



mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);


//create session for passport
app.use(session({
 secret : "test",
 resave : false,
 saveUninitialized : true
}))
app.use("/auth", authRoutes);
// app.use('/projects', passport.authenticate('jwt', {session: false}), require('./routes/project'))
// app.use('/projects/:id/sprints/', passport.authenticate('jwt', {session: false}), require('./routes/sprint'))
// app.use('/projects/:projectId/sprints/:sprintId/task', passport.authenticate('jwt', {session: false}), require('./routes/task'))

//passport ininitalied after you session is a must
app.use(passport.initialize());
app.use(passport.session());

app.use("/projects", projectsRoutes);
//connect sprint route
app.use("/projects/:id/sprints/", sprintsRoutes);


//connect task route
// app.use("/task", taskRoutes);
app.use("/projects/:projectId/sprints/:sprintId/task", taskRoutes);


app.get("*", (req, res) => {
  res.status(404).json({message: "Page not found"});
});

app.listen(5000, () => console.log("express running"));
