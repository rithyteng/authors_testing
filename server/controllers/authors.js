var mongoose = require('mongoose');
var authors = mongoose.model('authors');


module.exports = {
  adding: function(req,res){
     var authorz = new authors(req.body);
     authorz.save(function(err,data){
         if(err){
             console.log('Saving is Not Complete')
         }
         else{
             console.log(data)
             res.json(data);
         }
     })
  },

  index: function(req,res){
    authors.find({},function(err,author){
        if(err){
            console.log('Error')
        }
        else{
            console.log('index');
            console.log(author);
            res.json(author);
        }
    })
  }
}