var assert = require("assert")
var should = require("should")

var Model = require("../lib/model");

describe ('model', function () {

  it ('should have method storeData', function(done) {

    var model = new Model();
    model.should.have.property('storeData');
    done();

  });

  describe ( '.storeData', function () {

    it ('shoud have onDataStoreEventName property', function (done) {
      
      var model = new Model();
      model.should.have.property('onDataStoreEventName');
      done();

    });


    it ('should store any data in storega under ID hash', function(done) {

      var model = new Model();
      
      model.on(model.onDataStoreEventName, function (storage) {
        storage.should.have.property('1');
        done();
      });

      model.storeData(1, {some: 'data'});

    });

    it ('renamed onDataStoreEventName value would be emitted', function (done) {

      var model1 = new Model();
      model1.onDataStoreEventName = 'new_on_save'; // this allows us to emit custom event name

      var model2 = new Model();

      model1.on(model1.onDataStoreEventName, function (storage) {
        storage.should.have.property('1');
        storage.should.not.have.property('2');
      });

      model2.on(model2.onDataStoreEventName, function (storage) {
        storage.should.not.have.property('1');
        storage.should.have.property('2');
      });

      model1.storeData(1, {x: 10});
      model2.storeData(2, {y: 15});

      done();

    });
  
  });
  
});
