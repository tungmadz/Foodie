var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

//define the schema for our user model
var orderSchema = new Schema({
    id : String,
	table : Number,
	dishes : [
        {
            name : String,
	        quantity : Number,
        }
    ]

});


//create the model for users and expose it to our app
module.exports = mongoose.model('Order',orderSchema);
