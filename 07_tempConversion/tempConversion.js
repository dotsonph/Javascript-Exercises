const convertToFahrenheit = function(degree) {
	let x = degree * (9/5) + 32;
	return Number(x.toFixed(1));
};

const convertToCelsius = function(degree) {
	let x = (degree - 32) * (5/9);
	return Number(x.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
