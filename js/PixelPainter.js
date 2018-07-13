var clicked = '';
//add viewport to head section
var meta = document.createElement('meta');
meta.name = 'viewport';
meta.contnet = 'width=device-width, initial-scale=1.0';
document.getElementsByTagName('head')[0].appendChild(meta);

//create div for color swatch
var swatchDiv = document.createElement('div');
swatchDiv.id = 'colorSwatch';

//create individual box
function colorBox(num){
    for (var i = 0; i < num; i++){
        var colorB = document.createElement('div');
        colorB.className = 'colorB';
        colorB.style.backgroundColor = getRandomColor();
        colorSwatch.appendChild(colorB);
    }
}
pixelPainter.appendChild(swatchDiv);
colorBox(200);

//create random color
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

//pick color
    var myColor = document.getElementsByClassName('colorB');
    for(var i = 0; i < myColor.length; i++){
        myColor[i].addEventListener('click', showColor);
    }


//show Color
var myC = '';
function showColor(){
    // console.log(this.style.backgroundColor); 
    myC = this.style.backgroundColor;
    
    
}
//create erase button 
var buttonE = document.createElement('button');
buttonE.id = 'buttonEr';
buttonE.className = 'btn';
buttonE.type = 'button';
buttonE.innerHTML = 'Erase';
pixelPainter.appendChild(buttonE);

//erase button 
buttonEr.addEventListener('click', eraseElem);
function eraseElem(){
    for(var i = 0; i < singleC.length; i++){
       singleC[i].addEventListener('click', eraseIt);
    }
    function eraseIt(){
        this.style.backgroundColor = 'transparent';
    }
}
//create clear button
var buttonC = document.createElement('button');
buttonC.id = 'buttonCl';
buttonC.className = 'btn';
buttonC.type = 'button';
buttonC.innerHTML = 'Clear';
pixelPainter.appendChild(buttonC);

//clear button function
buttonCl.addEventListener('click', clearElem);
function clearElem(){
    for(var i = 0; i < singleC.length; i++){
        singleC[i].style.backgroundColor = 'transparent';   
    }
}

//create canvas
var canvasDiv = document.createElement('div');
canvasDiv.id = 'canvas';
pixelPainter.appendChild(canvasDiv);

function myCanvas(height, width){
    for(var i = 0; i < height; i++){
       var columnBox = document.createElement('div');
       columnBox.className = 'canvasBox';
       canvas.appendChild(columnBox);
       for(j = 0; j < width; j++){
           var rowBox = document.createElement('div');
           rowBox.className = 'canvasBox';
           canvas.appendChild(rowBox);
        
       }
    }
    
}
myCanvas(16, 16);

//select each canvas
var singleC = document.getElementsByClassName('canvasBox');
for(var i = 0; i < singleC.length; i++){
    singleC[i].addEventListener('click', addColor);
}

// click and change color

function addColor(){
    console.log(this.position);
     this.style.backgroundColor = myC;
}