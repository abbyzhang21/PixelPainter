console.log('Sanite Check!');
//add viewport to head section
var meta = document.createElement('meta');
meta.name = 'viewport';
meta.contnet = 'width=device-width, initial-scale=1.0';
document.getElementsByTagName('head')[0].appendChild(meta);

//create div for color swatch
var swatchDiv = document.createElement('div');
swatchDiv.id = 'colorSwatch';
var image = document.createElement('img');
image.src ='http://www.waldighoffen.com/accueil/photographies-waldighoffen/cliparts-et-dessins/palette-de-couleurs/image_preview';
swatchDiv.appendChild(image);
document.getElementById('pixelPainter').appendChild(swatchDiv);