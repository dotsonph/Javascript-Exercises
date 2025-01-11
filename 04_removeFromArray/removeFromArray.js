const removeFromArray = function(array, ...args) {
	let newArray = [];
	for (let arg=1;arg<arguments.length;arg++)
	{
		while(array.includes(arguments[arg])==true)
		{
			let index = array.indexOf(arguments[arg]);
			array.splice(index,1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
