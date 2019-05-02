function Thermostat() {
  this.temp = 20;
  this.MIN_TEMP = 10;
  this.MAX_PS_TEMP = 25;
  this.MAX_TEMP = 32;
  this.powerSaving = true;
}

Thermostat.prototype.getTemp = function(){
  return this.temp
}

Thermostat.prototype.up = function(number){
  this.temp += number;
  if (this.temp > this.isMaximumTemp()) {
    this.temp = this.isMaximumTemp();
  }
}

Thermostat.prototype.down = function(number){
  this.temp -= number;
  if (this.temp < this.MIN_TEMP) {
    this.temp = this.MIN_TEMP;
  }
}

Thermostat.prototype.isPowerSaving = function(){
  return this.powerSaving
}

Thermostat.prototype.togglePowerSaving = function(){
  this.powerSaving = !this.powerSaving;
}

Thermostat.prototype.isMaximumTemp = function(){
  if (this.powerSaving === true) {
    return this.MAX_PS_TEMP;
  } if (this.powerSaving === false) {
    return this.MAX_TEMP;
    }
  }

Thermostat.prototype.reset = function(){
  this.temp = 20
}

Thermostat.prototype.isUsageRating = function(){
  if (this.getTemp() < 18) {
    return 'low-usage';
  } else if (this.getTemp() >= 18 && this.getTemp() < 25) {
    return 'medium-usage';
  } else  {
    return 'high-usage';
  }
}
