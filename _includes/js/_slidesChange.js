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

var images0 = [],
x0 = 0;
var id0 = "home_page_slides";
images0[0] = "/images/homeProm/image2.png";
images0[1] = "/images/homeProm/image3.png";
images0[2] = "/images/homeProm/image4.png";
images0[3] = "/images/homeProm/image5.png";
images0[4] = "/images/homeProm/image6.png";
images0[5] = "/images/homeProm/image7.png";


var images1 = [],
x1 = 0;
var id1 = "printer_slides1";
images1[0] = "/images/projects/3dPrinter/meeting1/image1.jpg";
images1[1] = "/images/projects/3dPrinter/meeting1/image2.jpg";
images1[2] = "/images/projects/3dPrinter/meeting1/image3.jpg";
images1[3] = "/images/projects/3dPrinter/meeting2/image1.jpg";
images1[4] = "/images/projects/3dPrinter/meeting2/image2.jpg";
images1[5] = "/images/projects/3dPrinter/meeting3/image1.jpg";
images1[6] = "/images/projects/3dPrinter/meeting3/image2.jpg";
images1[7] = "/images/projects/3dPrinter/meeting3/image3.jpg";
images1[8] = "/images/projects/3dPrinter/meeting3/image4.jpg";
images1[9] = "/images/projects/3dPrinter/meeting3/image5.jpg";
images1[10] = "/images/projects/3dPrinter/meeting3/image6.jpg";
images1[11] = "/images/projects/3dPrinter/meeting3/image7.jpg";
images1[12] = "/images/projects/3dPrinter/meeting3/image8.jpg";
images1[13] = "/images/projects/3dPrinter/meeting4/image1.jpg";
images1[14] = "/images/projects/3dPrinter/meeting4/image2.jpg";
images1[15] = "/images/projects/3dPrinter/meeting4/image3.jpg";
images1[16] = "/images/projects/3dPrinter/meeting4/image4.jpg";
images1[17] = "/images/projects/3dPrinter/meeting5/image1.jpg";
images1[18] = "/images/projects/3dPrinter/meeting5/image2.jpg";
images1[19] = "/images/projects/3dPrinter/meeting5/image3.jpg";
images1[20] = "/images/projects/3dPrinter/meeting5/image4.jpg";


var images2 = [],
x2 = 0;
var id2 = "printer_slides2";
images2[0] = "/images/projects/3dPrinter/meeting6/image1.jpg";
images2[1] = "/images/projects/3dPrinter/meeting6/image2.jpg";
images2[2] = "/images/projects/3dPrinter/meeting6/image3.jpg";

var images3 = [],
x3 = 0;
var id3 = "quadrotor_slides1";
images3[0] = "/images/projects/quadrotor/image1.jpg";
images3[1] = "/images/projects/quadrotor/image2.jpg";
images3[2] = "/images/projects/quadrotor/image3.jpg";
images3[3] = "/images/projects/quadrotor/image4.jpg";
images3[4] = "/images/projects/quadrotor/image5.jpg";

var images4 = [],
x4 = 0;
var id4 = "quadrotor_slides2";
images4[0] = "/images/projects/quadrotor/image6.jpg";
images4[1] = "/images/projects/quadrotor/image7.jpg";
images4[2] = "/images/projects/quadrotor/image8.jpg";
images4[3] = "/images/projects/quadrotor/image9.jpg";
images4[4] = "/images/projects/quadrotor/image10.jpg";
images4[5] = "/images/projects/quadrotor/image11.jpg";
images4[6] = "/images/projects/quadrotor/image12.jpg";
images4[7] = "/images/projects/quadrotor/image13.jpg";

var images5 = [],
x5 = 0;
var id5 = "robot_slides";
images5[0] = "/images/projects/robot/image1.jpg";
images5[1] = "/images/projects/robot/image2.jpeg";
images5[2] = "/images/projects/robot/image3.jpg";
images5[3] = "/images/projects/robot/image4.jpg";
images5[4] = "/images/projects/robot/image5.jpeg";



setTimeout("changeImage(images0,x0,id0)", 2500);

setTimeout("changeImage(images1,x1,id1)", 2500);

setTimeout("changeImage(images2,x2,id2)", 2500);

setTimeout("changeImage(images3,x3,id3)", 2500);

setTimeout("changeImage(images4,x4,id4)", 2500);

setTimeout("changeImage(images5,x5,id5)", 2500);
