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

    it ('should store any data in storega under ID hash', function(done) {

      var model = new Model();
      
      model.on('dataStored', function (storage) {
        storage.should.have.property('1');
        done();
      });

      model.storeData(1, {some: 'data'});

    });
  
  });
  
});
