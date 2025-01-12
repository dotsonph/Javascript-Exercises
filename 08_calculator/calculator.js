const add = function(A, B) {
	return (A+B);	
};

const subtract = function(A,B) {
	return (A-B);	
};

const sum = function(arr) {
	let summer = 0;
	for (let iter=0;iter<arr.length;iter++)
	{
		summer = summer + arr[iter];	
	}
	return summer;
};

const multiply = function(arr) {
	
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
