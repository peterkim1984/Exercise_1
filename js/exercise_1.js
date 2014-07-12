/*var random = Math.floor(Math.random() * 1000) + 1;
console.log(random);


var staticrandom = random;

array1.push(staticrandom)
console.log(array1.indexOf(staticrandom))
console.log(array1)
array1.push(staticrandom)
console.log(array1)
console.log(random)*/


var generate = function(){
var array1 = [];

for (i=0; array1.length <= 999; i++) {
  var random = Math.floor(Math.random() * 1000) + 1;

  while (array1.indexOf(random) > -1) {
    random = Math.floor(Math.random() * 1000) + 1;
  }  
    array1.push(random);

   
}
 return array1;   
}

var a1 = generate()
var a2 = generate()
console.log(a1)
console.log(a2)