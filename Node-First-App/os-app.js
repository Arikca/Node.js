const os= require('os');

var totalMemory= os.totalmem();
var freeMemory= os.freemem();

console.log('Total Memory ' + totalMemory);
console.log('Free Memory: '+ freeMemory);
//using ES6
//console.log(`Total Memory: $(totalMemory)`);