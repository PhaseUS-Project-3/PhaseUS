const mongoose = require('mongoose')
const dotenv = require("dotenv/config");
//'mongodb://localhost/testAuthorization'
mongoose.connect(process.env.AUTH_DB,{ useNewUrlParser : true, useUnifiedTopology: true })
.then((   ) => console.log('connected MongoDB'),
      (err) => console.log(err))

mongoose.set('useCreateIndex', true);