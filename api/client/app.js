(function() {
  'use strict';

  angular.module('plunker', ['ngMessages']);

  angular.module('plunker')
    .run(function() {
      console.log('Initialized');
    });

  angular.module('plunker')
    .controller('CarController', Car)

  function Car() {
    var carVm = this;

    carVm.imageUrl = 'https://egen.solutions/images/egen-logo.png';
    
    carVm.sorter = {
      sortBy: 'lastServiceDate',
      sortOrder: true
    };
    
    carVm.cars = [{
      "vin": "1HGCR2F3XFA027534",
      "make": "HONDA",
      "model": "ACCORD",
      "year": 2015,
      "redlineRpm": 6000,
      "maxFuelVolume": 17.2,
      "lastServiceDate": "2017-01-02T20:59:19.905Z"
    }, {
      "vin": "WP1AB29P63LA60179",
      "make": "PORSCHE",
      "model": "CAYENNE",
      "year": 2015,
      "redlineRpm": 6700,
      "maxFuelVolume": 26.4,
      "lastServiceDate": "2017-02-07T22:24:35.434Z"
    }, {
      "vin": "1VWAP7A35CC020276",
      "make": "VOLKSWAGEN",
      "model": "PASSAT",
      "year": 2012,
      "redlineRpm": 6200,
      "maxFuelVolume": 18.5,
      "lastServiceDate": "2017-03-14T13:33:38.632Z"
    }, {
      "vin": "WBAFR1C50BC747531",
      "make": "BMW",
      "model": "528",
      "year": 2011,
      "redlineRpm": 7000,
      "maxFuelVolume": 18.5,
      "lastServiceDate": "2017-05-28T16:26:26.913Z"
    }, {
      "vin": "3GCRKSE30AG105585",
      "make": "CHEVROLET",
      "model": "SILVERADO",
      "year": 2010,
      "redlineRpm": 6000,
      "maxFuelVolume": 26,
      "lastServiceDate": "2017-04-03T11:23:29.430Z"
    }, {
      "vin": "WA1CMAFE6BD002500",
      "make": "AUDI",
      "model": "Q7",
      "year": 2011,
      "redlineRpm": 4750,
      "maxFuelVolume": 22.5,
      "lastServiceDate": "2017-03-10T21:33:20.492Z"
    }, {
      "vin": "2T1BU4EE4DC919097",
      "make": "TOYOTA",
      "model": "COROLLA",
      "year": 2013,
      "redlineRpm": 6500,
      "maxFuelVolume": 13.2,
      "lastServiceDate": "2017-05-29T07:36:52.365Z"
    }, {
      "vin": "1FMYU02143KB34432",
      "make": "FORD",
      "model": "ESCAPE",
      "year": 2003,
      "redlineRpm": 6500,
      "maxFuelVolume": 15.7,
      "lastServiceDate": "2017-02-10T00:53:12.871Z"
    }, {
      "vin": "5J6RM3H50DL032829",
      "make": "HONDA",
      "model": "CR-V",
      "year": 2013,
      "redlineRpm": 6400,
      "maxFuelVolume": 14,
      "lastServiceDate": "2017-04-16T13:54:56.576Z"
    }, {
      "vin": "1ZVBP8JS8A5159269",
      "make": "FORD",
      "model": "MUSTANG",
      "year": 2010,
      "redlineRpm": 8200,
      "maxFuelVolume": 16,
      "lastServiceDate": "2017-05-11T19:16:17.451Z"
    }];
    
    carVm.addCar = function () {
      carVm.cars.push(carVm.newCar);
      console.log(carVm.cars);
      carVm.newCar = null;
    };
    
  }

})()