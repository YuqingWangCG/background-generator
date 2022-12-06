var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var h3 = document.querySelector('h3');
var body = document.querySelector('.body');
var h2 = document.querySelector('.initialcolor');
var random = document.querySelector('.random');



function setColor(){
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + 
	color2.value + ')';
	h3.textContent = body.style.background;
}

function getRandomColor(){
   var letters = '0123456789ABCDEF';
   var color = '#'
   for (var i = 0; i <6; i++) {
    	color += letters[Math.floor(Math.random()*16)];
    } 
    return color;
}

function setRandomColor(){
    color1.value=getRandomColor();
    color2.value=getRandomColor();
    setColor();
}
window.addEventListener(document.onload, setColor()); 

color1.addEventListener('input', setColor);
color2.addEventListener('input', setColor);
random.addEventListener('click', setRandomColor);

