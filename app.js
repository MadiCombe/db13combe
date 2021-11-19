var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// psst. it's over here 
var Puppy = require("./models/puppy");



var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 
 

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose"); 
 
const accountSchema = new Schema({ 
    username: String, 
    password: String 
}); 
 
accountSchema.plugin(passportLocalMongoose); 
 
// We export the Schema to avoid attaching the model to the 
// default mongoose connection. 
module.exports = mongoose.model("Account", accountSchema; 
passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  } 
  app.use(require('express-session')({ 
    secret: 'keyboard cat', 
    resave: false, 
    saveUninitialized: false 
  })); 
  app.use(passport.initialize()); 
  app.use(passport.session()); 
 // passport config 
// Use the existing connection 
// The Account model  
var Account =require('./models/account')); 
 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 


// List of all Costumes 
exports.puppySchema = function(req, res) { 
    res.send('NOT IMPLEMENTED: Puppy list'); 
}; 
 
// for a specific Costume. 
exports.puppy_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Puppy detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.puppy_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Puppy create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.puppy_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Puppy delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.puppy_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Puppy update PUT' + req.params.id); 
}; 
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString),  
{useNewUrlParser: true},

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on 
server(start) 
async function recreateDB(){ 
  // Delete everything 
  await Puppy.deleteMany(); 
 
  let instance1 = new
Puppy({puppy_breed:"pug",  weight:30, 
size:'medium'}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved")
Puppy({puppy_breed:"husky",  weight:80, 
size:'large'}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second object saved")
Puppy({puppy_breed:"weiner dog",  weight:10, 
size:'small'}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third object saved")
  }); 
}
/* GET detail puppy page */ 
router.get('/detail', puppy_controlers.puppy_view_one_Page)

 
 // Handle a show one view with id specified by query 
 exports.puppy_view_one_Page = async function(req, res) { 
  puppy.log("single view for id "  + req.query.id) 
  try{ 
      result = await puppy.findById( req.query.id) 
      res.render('puppydetail',  
{ title: 'Puppy Detail', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}

/* GET create update page */ 
router.get('/update, puppy_controlers.puppy_update_Page)
 
 // Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.puppy_create_Page =  function(req, res) { 
  console.log("create view") 
  try{ 
      res.render('puppycreate', { title: 'Puppy Create'}); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
  // Handle building the view for updating a costume. 
// query provides the id 
exports.puppy_update_Page =  async function(req, res) { 
  console.log("update view for item "+req.query.id) 
  try{ 
      let result = await puppy.findById(req.query.id) 
      res.render('puppyupdate', { title: 'Puppy Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 

/* GET create costume page */ 
router.get('/delete, costume_controlers.costume_delete_Page)
// Handle a delete one view with id from query 
exports.puppy_delete_Page = async function(req, res) { 
  console.log("Delete view for id "  + req.query.id) 
  try{ 
      result = await puppy.findById(req.query.id) 
      res.render('puppydelete', { title: 'Puppy Delete', toShow: 
result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 

}
// Handle puppy delete on DELETE. 
exports.puppy_delete = async function(req, res) { 
  console.log("delete "  + req.params.id) 
  try { 
      result = await puppy.findByIdAndDelete( req.params.id) 
      console.log("Removed " + result) 
      res.send(result) 
  } catch (err) { 
      res.status(500) 
      res.send(`{"error": Error deleting ${err}}`); 
  } 
}
exports.api = function(req, res) { 
  res.write('['); 
  res.write('{"resource":"costumes", '); 
  res.write('  "verbs":["GET","PUT", "DELETE"] '); 
  res.write('}'); 
  res.write(']') 
  res.send(); 
}