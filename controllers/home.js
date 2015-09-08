var model = require('../models')

module.exports = {
  getHome: function(req,res){
    // async.parallel([
    //   name: function(callback){
    //
    //   }
    // ],
    // function(err,results){
    //   // final callback
    // })
    res.render('home');
  }
}
