var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [ { name:"clouds rest", 
                image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
                description: "blah blah blah"},
                
            { name:"desert mesa", 
                image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
                description: "blah 141bl000111ah blah"},
                
                { name:"canyan floor", 
                image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
                description: "blah blah blah"}
    
    ]

function seedDB(){
    Campground.remove({}, function(err){
    if(err){console.log(err)}
    console.log("removed campgrounds!");
   
    data.forEach(function(seed){ Campground.create(seed, function(err, campground){
       if(err){console.log(err)}
       else{console.log("added a campground");
           Comment.create({text: "this place is great but i wish it had internet",
                           author :"homer"
           }, function(err, comment){
               if(err){console.log(err)}
               else{campground.comments.push(comment);
               campground.save();}
               console.log("created new comment");
          })
       }
   })
       
   }) 
    
    });
   
   
}

module.exports = seedDB;