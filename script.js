var boxEle = document.body.querySelector(".calc");

var num1 = Number(prompt("Please enter a number. "));
var num2 = Number(prompt("Please enter another number to add to the first. "));
var total = num1 + num2;

boxEle.innerHTML= total