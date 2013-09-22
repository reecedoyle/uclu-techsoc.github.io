function changeImage()
{
    var img = document.getElementById("home_page_slides");
     img.style.opacity=0;
    img.src = images[x];
    x++;
    
    if(x >= images.length){
        x = 0;
    } 
    //setTimeout(5000);
    //fadeImg(img, 100, true);
   img.style.opacity=1;
    setTimeout(function(){ fadeImg(img, 100, true);}, 5000);
    
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 15);
    }
else changeImage();
}

var images = [],
x = 0;

images[0] = "images/homeProm/image2.png";
images[1] = "images/homeProm/image3.png";
images[2] = "images/homeProm/image4.png";
images[3] = "images/homeProm/image5.png";
images[4] = "images/homeProm/image6.png";
images[5] = "images/homeProm/image7.png";
images[6] = "images/homeProm/image8.png";

setTimeout("changeImage()", 2500);

