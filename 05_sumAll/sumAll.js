const sumAll = function(A, B) {
	let summer = 0;
	if (Number.isInteger(A) == false || Number.isInteger(B) == false)
	{
		return "ERROR";
	}
	if (A < 0 || B < 0) 
	{
		return "ERROR";
	}

	for (let x=Math.max(A,B);x>=Math.min(A,B); x--)
	{
		summer = summer + x;
	}
	return summer;
};

// Do not edit below this line
module.exports = sumAll;
