
function startGame() {

  myGameArea.start();

  sfondo.loadImages();
  palazzo.loadImages();
  palazzo1.loadImages();
  palazzo2.loadImages();
  animatedObject.loadImages();

}

var myGameArea = {
    
    canvas : document.createElement("canvas"),

    start: function() {
        this.canvas.width = 2000;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.interval = setInterval(updateGameArea, 20);
      },    

    draw: function(component) {
        this.context.fillStyle =  component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
    },

    drawGameObject: function(gameObject) {
        this.context.drawImage(
          gameObject.image,
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );
      }
}

//disegno palazzi\trex\sfondo
var sfondo = {
  speedX: 0,
  speedY: 0,
  width: 5000,
  height: 1200,
  x: 0,
  y: 30,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "tsfondo2.png"; //Qui metti una tua immagine
  }
};
var palazzo = {
  speedX: 0,
  speedY: 0,
  width: 65,
  height: 80,
  x: 450,
  y: 570,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "troccia.png"; //Qui metti una tua immagine
  }
};
var palazzo1 = {
  speedX: 0,
  speedY: 0,
  width: 65,
  height: 100,
  x: 900,
  y: 550,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "troccia.png"; //Qui metti una tua immagine
  }
};
var palazzo2 = {
  speedX: 0,
  speedY: 0,
  width: 65,
  height: 80,
  x: 1250,
  y: 570,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "troccia.png"; //Qui metti una tua immagine
  }
};
var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 85,
    height: 100,
    x: 50,
    y: 550,
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "tdinosauro.png"; //Qui metti una tua immagine
    }
  };

function updateGameArea() {
  document.getElementById("punteggio").innerHTML = x
  myGameArea.canvas.getContext("2d").clearRect(0,0, myGameArea.canvas.width, myGameArea.canvas.height);
  jump();
  gravity();
  myObject(); 
  punteggio();   
}

function myObject() {
    myGameArea.drawGameObject(sfondo);
    myGameArea.drawGameObject(palazzo);
    myGameArea.drawGameObject(palazzo1);
    myGameArea.drawGameObject(palazzo2);
    myGameArea.drawGameObject(animatedObject);
}

let speedUp=0;
let airTime=0;
let fallSpeed=12;

function gravity(){
  if (animatedObject.y + animatedObject.height < 650){
    animatedObject.y += fallSpeed;
  } else {
      airTime = 0;
  }
}

function jump() {
  animatedObject.y -= speedUp;
  airTime += speedUp;
}

let x=0;
let punt=false;
//punteggio
function punteggio() {
  if (punt==false) {
    x+=1;
  }
}
//salto
document.addEventListener("keydown",(event)=> {
  if (event.key == "a") {
    speedUp=35;
  }
});
document.addEventListener("keyup",(event)=> {
  if (event.key == "a") {
    speedUp=0;
    x+=10;
  }
});

