
var textPara = document.querySelector("#text-para");
console.log(textPara);

var btnPlus =document.querySelector("#btn-plus");
var btnMinus =document.querySelector("#btn-minus");
var num = 16;
btnPlus.addEventListener("click",function(){
	num +=2;
	textPara.style.fontSize =num+'px';
	
	

});

btnMinus.addEventListener("click",function(){
	num -=2;
	textPara.style.fontSize =num+'px';
	

});

