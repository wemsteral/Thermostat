# Thermostat

```
Specification:

Thermostat starts at 20 degrees
You can increase the temperature with an up function (the amount is set in a number field)
You can decrease the temperature with a down function (same here)
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
```

## Approach

* The logic was written in Javascript within a single constructor that 'owns' various prototype functions.
* The app was made interactive with JQuery.

### How to run

* Clone this repo.
* Visit the full path of the ```index.html``` file.
* Enter a town/city/region in the submit entry box to check the REAL LIVE temperature in that place.
* Enter a number in the number box and add or subtract it to the thermostat temperature.
*DISCLAIMER: WILL NOT ALTER THE AMBIENT TEMPERATURE OF THE BUILDING IN WHICH IT IS USED*

![SS1](https://github.com/wemsteral/Thermostat/blob/master/SS1.png)
