// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  //function(table, cols, vals, cb)
  create: function(cols,vals,cb){
    orm.create("burgers",cols, vals,function(res) {
        cb(res);
    });
  },

  //function(table, statusObject, condition, cb)
  update: function(status, condition, cb){
    orm.update("burgers", status, condition, function(res){
        cb(res);
    });
  }

};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;




//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("cats", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }

  // delete: function(id,condition, cb) {
  //   orm.delete("cats", id, function(res) {
  //     cb(res);
  //   });
  // }



