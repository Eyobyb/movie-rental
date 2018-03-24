

const express = require('express');
const mongoose = require('mongoose');

var Schema= mongoose.Schema;
mongoose.connect('mongodb://localhost/Movie', () => {
    console.log("Connected to Database");
})
var MovieSchema = new Schema({
   
    Title:{
        type: String,
        required:true,
    }, Cost:{
        type: Number,
        required:true,
    },Year:{
        type: String,
        required:true,
    }});

var Movie = module.exports = mongoose.model('Movie',MovieSchema);


module.exports.AddMovie=function(info) {
      console.log('add movies');
      Movie.collection.update({Title:info.Title},info,{upsert:true});
       
    };

module.exports.selectByTitle=function(title,callback){
    
    Movie.find().exec((err,result)=>{         
     callback(result);
      });
    };
module.exports.deletMovie=function(name){
        Movie.findOneAndRemove({Title:title},(err,result)=>{
            if(err){
                console.log("error no more moveis");     
            }
            else{
                console.log("deleting");
            }
        });
       };
// module.exports.checkPassword=function(name,password,callback){
//     LogIn.findOne({UserName:name}).select({'UserName':1,'Password':1,'_id':0}).exec((err,result)=>{         
        
//          if(result.Password==password){
//              console.log(result.Password);
//             callback(true);
//          }else{
//              callback(false);
//          }
//           });
//         };



 
 

