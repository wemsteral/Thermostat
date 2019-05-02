'use strict';

describe('Thermostat', function(){

  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default of 20 degrees', function(){
    expect(thermostat.getTemp()).toEqual(20);
  });

  it('increases with up()', function(){
    thermostat.up(1);
    expect(thermostat.getTemp()).toEqual(21);
  });

  it('decreases with down()', function(){
    thermostat.down(10);
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('does not go below 10', function(){
    thermostat.down(11);
    expect(thermostat.getTemp()).toEqual(10);
  });

  it('power saving mode is on by default', function(){
    expect(thermostat.powerSaving).toEqual(true)
  });

  it('can display powersaving status', function(){
    expect(thermostat.isPowerSaving()).toEqual(true)
  });

  it('can toggle PSM', function(){
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toEqual(false)
    thermostat.togglePowerSaving();
    expect(thermostat.powerSaving).toEqual(true)
  });

  it('can reset temp to 20', function(){
    thermostat.up(5);
    thermostat.reset();
    expect(thermostat.getTemp()).toEqual(20)
  });

  describe('when PSM is on', function(){
    it('has a maximum temp of 25c', function(){
      //starting at 20c
      thermostat.up(6);
      expect(thermostat.getTemp()).toEqual(25)
    });
  });

  describe('when PSM is off', function(){
    it('has a maximum temp of 32c', function(){
      //starting at 20c
      thermostat.togglePowerSaving();
      thermostat.up(13);
      expect(thermostat.getTemp()).toEqual(32)
    });
  });

  describe('showing usage rating', function(){
    it('returns "medium-usage" at default temp', function(){
      expect(thermostat.isUsageRating()).toEqual("medium-usage")
    });

    it('returns "high-usage" when higher than 25', function(){
      thermostat.up(6);
      expect(thermostat.isUsageRating()).toEqual("high-usage")
    });

    it('returns "low usage" when below 18', function(){
      thermostat.reset();
      thermostat.down(3);
      expect(thermostat.isUsageRating()).toEqual("low-usage")
    });
  });
});
