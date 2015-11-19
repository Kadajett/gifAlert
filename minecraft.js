var image = new Image();

image.src = 'https://s24.postimg.org/xqegdco5f/zt_Nf_NWx_Imgur.gif';
image.id = "minecraftGif"
image.style.position = 'absolute';
image.style.marginLeft = 'auto';
image.style.marginRight = 'auto';
image.style.left = 0;
image.style.right = 0;
image.style.bottom = 0;
image.style.width = '50%';
if(!document.getElementById('minecraftGif')){
  image.onload = function(){
    document.body.appendChild(image);
    setTimeout(function(){
      document.body.removeChild(image);
      image.src = '';
      delete image;
    }, 3000);

  };
}
