const reverseString = function(string) {
	let sentence = "";
	for (let x = string.length-1; x >= 0; x--) 
	{
		sentence = sentence + string[x];
	}
	return sentence;
};

// Do not edit below this line
module.exports = reverseString;
