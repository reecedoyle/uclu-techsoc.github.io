function changeImage(images,x,id)
{
    var img=document.getElementById(id);
   
    img.style.opacity=0;
    img.src = images[x];
    x++;
    
    if(x >= images.length){
        x = 0;
    } 
   img.style.opacity=1;
    setTimeout(function(){ fadeImg(images,x,id,img, 100, true);}, 5000);
    
}

function fadeImg(images,x,id,el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(images,x,id,el,val,fade);}, 15);
    }
else changeImage(images,x,id);
}


var images1 = [],
x1 = 0;
images1[0] = "/images/projects/3dPrinter/meeting1/image1.jpg";
images1[1] = "/images/projects/3dPrinter/meeting1/image2.jpg";
images1[2] = "/images/projects/3dPrinter/meeting1/image3.jpg";
var id1 = "printer_slides1";

var images2 = [],
x2 = 0;
images2[0] = "/images/projects/3dPrinter/meeting2/image1.jpg";
images2[1] = "/images/projects/3dPrinter/meeting2/image2.jpg";
var id2 = "printer_slides2";

var images3 = [],
x3 = 0;
images3[0] = "/images/projects/3dPrinter/meeting3/image1.jpg";
images3[1] = "/images/projects/3dPrinter/meeting3/image2.jpg";
images3[2] = "/images/projects/3dPrinter/meeting3/image3.jpg";
images3[3] = "/images/projects/3dPrinter/meeting3/image4.jpg";
images3[4] = "/images/projects/3dPrinter/meeting3/image5.jpg";
images3[5] = "/images/projects/3dPrinter/meeting3/image6.jpg";
images3[6] = "/images/projects/3dPrinter/meeting3/image7.jpg";
images3[7] = "/images/projects/3dPrinter/meeting3/image8.jpg";
var id3 = "printer_slides3";

var images4 = [],
x4 = 0;
images4[0] = "/images/projects/3dPrinter/meeting4/image1.jpg";
images4[1] = "/images/projects/3dPrinter/meeting4/image2.jpg";
images4[2] = "/images/projects/3dPrinter/meeting4/image3.jpg";
images4[3] = "/images/projects/3dPrinter/meeting4/image4.jpg";
var id4 = "printer_slides4";

var images5 = [],
x5 = 0;
images5[0] = "/images/projects/3dPrinter/meeting5/image1.jpg";
images5[1] = "/images/projects/3dPrinter/meeting5/image2.jpg";
images5[2] = "/images/projects/3dPrinter/meeting5/image3.jpg";
images5[3] = "/images/projects/3dPrinter/meeting5/image4.jpg";
var id5 = "printer_slides5";

var images6 = [],
x6 = 0;
images6[0] = "/images/projects/3dPrinter/meeting6/image1.jpg";
images6[1] = "/images/projects/3dPrinter/meeting6/image2.jpg";
images6[2] = "/images/projects/3dPrinter/meeting6/image3.jpg";
var id6 = "printer_slides6";


setTimeout("changeImage(images1,x1,id1)", 2500);

setTimeout("changeImage(images2,x2,id2)", 2500);

setTimeout("changeImage(images3,x3,id3)", 2500);

setTimeout("changeImage(images4,x4,id4)", 2500);

setTimeout("changeImage(images5,x5,id5)", 2500);

setTimeout("changeImage(images6,x6,id6)", 2500);

