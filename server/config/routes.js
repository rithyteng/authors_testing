
const controller = require('../controllers/authors.js');

module.exports = function(app){
    console.log('5555')
  
    app.post('/adding',function(req,res){
        console.log('In Routes Adding');
        console.log(req.body);
        controller.adding(req,res);
    })
    app.get('/home',function(req,res){
        console.log('Testing In ROutes')
        controller.index(req,res);
    })
 
}