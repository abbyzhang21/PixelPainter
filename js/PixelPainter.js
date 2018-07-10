console.log('Sanite Check!');
//add viewport to head section
var meta = document.createElement('meta');
meta.name = 'viewport';
meta.contnet = 'width=device-width, initial-scale=1.0';
document.getElementsByTagName('head')[0].appendChild(meta);

//create div for color swatch
// var swatchDiv = document.createElement('div');
// swatchDiv.id = 'colorSwatch';
// var image = document.createElement('img');
// image.src ='http://www.waldighoffen.com/accueil/photographies-waldighoffen/cliparts-et-dessins/palette-de-couleurs/image_preview';
// swatchDiv.appendChild(image);
// document.getElementById('pixelPainter').appendChild(swatchDiv);

//create canvas
var canvasDiv = document.createElement('div');
canvasDiv.id = 'canvas';
pixelPainter.appendChild(canvasDiv);

function myCanvas(height, width){
    for(var i = 0; i < height; i++){
       var columnBox = document.createElement('div');
       columnBox.className = 'canvasBox';
       canvas.appendChild(columnBox);
       columnBox.innerHTML ='w';
       for(j = 0; j < width; j++){
           var rowBox = document.createElement('div');
           rowBox.className = 'canvasBox';
           canvas.appendChild(rowBox);
           rowBox.innerHTML = 'f';
        
       }
    }
    
}
myCanvas(20, 20);

//select each canvas
var singleC = document.getElementsByClassName('canvasBox');
for(var i = 0; i < singleC.length; i++){
    singleC[i].addEventListener('click', addColor);
}
function addColor(){
    this.style.backgroundColor = 'black';
}