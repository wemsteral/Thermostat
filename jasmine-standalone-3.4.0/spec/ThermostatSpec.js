'use strict';

describe('Thermostat', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default of 20 degrees', function(){
    expect(thermostat.getTemp()).toEqual(20);
  });

  // it('increases by 1' function(){
  //   expect(thermostat.increase(temp)).to
  // });
});
