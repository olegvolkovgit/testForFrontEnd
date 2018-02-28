<!--// greetings //-->
var user = document.getElementById('#name');
var hello = document.getElementById('#hello');
var register= document.getElementById('#button');

if(user)
{
	hello.InnerHTML+=user;
}
<!--// greetings //-->


var colorPicker = document.getElementsByClassName('pickerCol')[0];
console.log(colorPicker.value)

function getColor(){
	 return document.getElementsByClassName('pickerCol')[0].value
}
console.log(getColor());

function setColor() {
	console.log(getColor());
}

var container = document.getElementsByClassName('bodyTop')[0]
function setColor() {
	container.style.backgroundColor = getColor();
}