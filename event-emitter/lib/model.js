var util = require("util")
var events = require("events")

var Model = function () {

  events.EventEmitter.call(this);

  /**
   * it allows us to emit custom event name, therefore we can define it per each model instance
   */
  this.onDataStoreEventName = 'dataStored';

  /**
   * local data storage
   */
  this.storage = {};

  /**
   * this is public function 
   */
  this.storeData = function ( id, data ) {

    this.storage[id] = data;
    this.emit(this.onDataStoreEventName, this.storage);

    return this.storage;

  }

}

util.inherits( Model, events.EventEmitter);
module.exports = Model;
