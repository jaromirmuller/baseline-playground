var util = require("util")
var events = require("events")

var Model = function () {

  events.EventEmitter.call(this);

  /**
   * local data storage
   */
  this. storage = {};

  /**
   * this is public function 
   */
  this.storeData = function ( id, data ) {

    this.storage[id] = data;
    this.emit("dataStored", this.storage);

    return this.storage;

  }

}

util.inherits( Model, events.EventEmitter);
module.exports = Model;
