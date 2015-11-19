var image = new Image();

image.src = 'https://funsubstance.com/uploads/gif/215/215926.gif';
image.id = 'leftSharkGif'
image.style.position = 'absolute';
image.style.marginLeft = 'auto';
image.style.marginRight = 'auto';
image.style.left = 0;
image.style.right = 0;
image.style.bottom = 0;
image.style.width = '50%';
if(!document.getElementById('leftSharkGif')){
  image.onload = function(){
    document.body.appendChild(image);
    setTimeout(function(){
      document.body.removeChild(image);
      image.src = '';
      delete image;
    }, 3000);

  };
}
