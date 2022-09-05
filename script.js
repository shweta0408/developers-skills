/*"use strict";

const x = 23;
if (x === 23) console.log("hello");

const calcAge = (birthYear) => 2022 - birthYear;

console.log("hello WORLD");
*/
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt(`Degree Celsius`)),
  };
  console.log(measurement);
  console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
