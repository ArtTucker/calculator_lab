
var firstNum;
var secondNum;
var result;




// 1
document.getElementById("num1").addEventListener("click", function(){
	getElementById("operator_display").textContent=1;
});

// 2
document.getElementById("num2").addEventListener("click", function(){
	console.log(2);
});

// 3
document.getElementById("num3").addEventListener("click", function(){
	console.log(3);
});

// 4
document.getElementById("num4").addEventListener("click", function(){
	console.log(4);
});

// 5
document.getElementById("num5").addEventListener("click", function(){
	console.log(5);
});

// 6
document.getElementById("num6").addEventListener("click", function(){
	console.log(6);
});

// 7
document.getElementById("num7").addEventListener("click", function(){
	console.log(7);
});

// 8
document.getElementById("num8").addEventListener("click", function(){
	console.log(8);
});

// 9
document.getElementById("num9").addEventListener("click", function(){
	console.log(9);
});

// 0
document.getElementById("zero").addEventListener("click", function(){
	console.log(0);
});

////////


// +
document.getElementById("plus").addEventListener("click", function(){
	console.log("+");
});

// -
document.getElementById("minus").addEventListener("click", function(){
	console.log("-");
});

// *
document.getElementById("mult").addEventListener("click", function(){
	console.log("*");
});

// /
document.getElementById("divi").addEventListener("click", function(){
	console.log("/");
});

// clear
document.getElementById("clear").addEventListener("click", function(){
	console.log();
});

// enter
document.getElementById("enter").addEventListener("click", function(){
	console.log();
});

////////

if (+) {
	return firstNum + secondNum;
} else if (-) {
	return firstNum - secondNum;
} else if ("*") {
	return firstNum * secondNum;
} else {
	return (firstNum / secondNum);
}
