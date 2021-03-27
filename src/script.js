var image1 = null;
var image2 = null;
var image3 = null;

var can1 = document.getElementById("can1");
var can2 = document.getElementById("can2");
var can3 = document.getElementById("can3");

function upload1()
{
 var fileinput = document.getElementById("upldfile1"); 
  image1 = new SimpleImage(fileinput);
  image1.drawTo(can1);
}
function upload2()
{
  var fileinput = document.getElementById("upldfile2");
  image2 = new SimpleImage(fileinput);
  image2.drawTo(can2);
}

 
function convert()
{
  image3 = new SimpleImage(image1.getWidth(),image1.getHeight());
for (var pixel of image1.values())
{
    var x = pixel.getX();
    var y = pixel.getY();
    
    if(pixel.getGreen()>( pixel.getRed()+pixel.getBlue()))
    {
        var img2pix = image2.getPixel(x,y);
        
        image3.setPixel(x,y,img2pix);
    }
    else
    {
        image3.setPixel(x,y,pixel);
    }
}
image3.drawTo(can3);
}