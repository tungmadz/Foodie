var express     = require("express");
var app         = express();
var server = require("http").Server(app);
//var server = require("http").createServer(app);
var io = require("socket.io")(server);
var port        = process.env.PORT || 8080;
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');

//app.engine('html', require('ejs').renderFile);

//var configDB    = require('./config/database.js');
//mongoose.connect(configDB.url);

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine','ejs');

server.listen(port,function(){
    console.log('The magic happens on port ' +port);
});


var Tables=[];
var adminID;
var Menu = require('./models/menu');
var Order = require('./models/order');

io.on("connection",function(socket){
    console.log("Co nguoi truy cap tai "+ socket.id);

    socket.on("login",function(data){
      console.log("User login with username: "+data);
      if(Tables.indexOf(data)>=0){
        socket.emit("login failed",data);
      }else{
          Tables.push(data);
          socket.Username=data;
          if(data=="admin"){
              adminID=socket.id;
              socket.emit("login success", socket.Username);
          }
          else{
               io.to(adminID).to(socket.id).emit("customer logged in",socket.Username);
          }
      }
    });

    socket.on("customer request menu",function(data){
        var menu = Menu.find({});
        socket.emit("server send menu",menu);
    });

    socket.on("customer send order",function(data){
        var order = new Order({
            id : data.id,
        	table : data.table,
        	dishes : data.dishes,
        });
        order.save(function(err){
            if (err)
                 console.log ('Error on save!');
             });
        io.to(adminID).emit("server send order",order);
    });

    socket.on("finish",function(data){
        socket.emit("done",{message: "Your order is done !"});
    });
});
app.get("/",function(req,res){
  res.render("index.ejs");
});
