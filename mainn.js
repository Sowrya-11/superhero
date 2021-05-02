var canvas = new fabric.Canvas('myCanvas');
 player_x = 10;
  player_y = 10;
  block_image_width = 30;
  block_image_height = 30;
   var player_object= "";
    var block_image_object= "";

window.addEventListener("keydown",itsAfunction);

function itsAfunction(e){
    var Keypressed = e.keyCode
    
    if (Keypressed == '70'){
        newimage('iron man face.png');
    }

    if (Keypressed == '66'){
        newimage('spiderman_body.png');
    }

    if (Keypressed == '76'){
        newimage('hulk_legs.png');

    }

    if (Keypressed == '82'){
        newimage('hammer.png');
    }

    if (Keypressed == '72'){
        newimage('shield.png');
    }

    if (Keypressed == '38'){
        up();
    }

    if (Keypressed == '38'){
        up();
    }
}



function player_update() { 
    fabric.Image.fromURL("spiderman_body.png", function(Img) {
         player_object = Img; player_object.scaleToWidth(150);
          player_object.scaleToHeight(140);
   player_object.set({ top:player_y, left:player_x });
    canvas.add(player_object);
   });}

   function up()   {
    if (player_y >=0){
player_y = player_y - block_image_height;
canvas.remove(player_object);
player_update(); 
    }
}


   function down()   {
    if (player_y >=500){
player_y = player_y + block_image_height;
canvas.remove(player_object);
player_update();
    }
}


function left(){
if (player_x <=0){
player_x = player_x - block_image_height;
canvas.remove(player_object);
player_update();
    }
}

function right()   {
    if (player_x >=800){
player_y = player_y + block_image_height;
canvas.remove(player_object);
player_update();
    }
}
