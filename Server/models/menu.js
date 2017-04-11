var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

//define the schema for our user model
var menuSchema = new Schema({
    id : String,
    name : String,
	description : String,
	image : String,
	cost : String

});


//create the model for users and expose it to our app
module.exports = mongoose.model('Menu',menuSchema);
