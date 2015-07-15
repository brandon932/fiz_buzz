div = 0;
for (var i = 0; i < 100 ; i++) {
div = div + 1;
if (div % 3 && div % 5 === 0 ){
  console.log("Fizz Buzz");
} else if (div % 3 === 0){
  console.log("Fizz");
} else if (div % 5 === 0) {
 console.log("Buzz");
}
else {
console.log(div);
}
}
