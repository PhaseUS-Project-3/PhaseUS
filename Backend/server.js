const express = require("express");
const app = express();
const path = require("path");

var cors = require('cors');


var allowedOrigins = ["http://localhost:5000", "http://localhost:3000"];

app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var message =
          "The CORS policy for this application does not allow access from origin " +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    }
  }))

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
const usersRoutes = require("./routes/users");
const taskRoutes = require("./routes/task");
//serves all our static files from the build directory.
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.set('useCreateIndex', true);

const PORT = process.env.PORT || 5000;
// var whitelist = ["http://localhost:5600", "http://example2.com"];

// var corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       var message =
//         "The CORS policy for this application does not allow access from origin " +
//         origin;
//       callback(new Error(message), false);
//     }
//   }
// };

// app.use(cors(corsOptions));

mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);
//create session for passport
app.use(session({
 secret : process.env.SECRET,
 resave : false,
 saveUninitialized : true
}))
app.use("/auth", authRoutes);
app.use('/projects', passport.authenticate('jwt', {session: false}), require('./routes/project'))
app.use('/projects/:id/sprints/', passport.authenticate('jwt', {session: false}), require('./routes/sprint'))
app.use('/projects/:projectId/sprints/:sprintId/task', passport.authenticate('jwt', {session: false}), require('./routes/task'))
//passport ininitalied after you session is a must
app.use(passport.initialize());
app.use(passport.session());
app.use("/projects", projectsRoutes);
//connect sprint route
app.use("/projects/:id/sprints/", sprintsRoutes);
app.use("/users", usersRoutes);
//connect task route
// app.use("/task", taskRoutes);
app.use("/projects/:projectId/sprints/:sprintId/task", taskRoutes);
app.get("*", (req, res) => {
  res.status(404).json({message: "Page not found"});
});
// After all routes
// This code essentially serves the index.html file on any unknown routes.
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

console.log(PORT)
app.listen(PORT, () => console.log("express running"));
