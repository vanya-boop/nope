var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('Birthdayimage.jpg',function(img) {
        block_img= img;

        block_img.scaleToWidth(400);
        block_img.scaleToHeight(200);
        block_img.set({
            top:0,
            left:0
        });
        canvas.add(block_img);
    });
	
}

function playSound(){
x.play();
}
