
function startGame() {

  myGameArea.start();

  palazzo.loadImages();
  palazzo1.loadImages();
  palazzo2.loadImages();
  animatedObject.loadImages();

  console.log("ciao");

}

var myGameArea = {
    
    canvas : document.createElement("canvas"),

    start: function() {
        this.canvas.width = 1600;
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

var palazzo = {
  speedX: 0,
  speedY: 0,
  width: 65,
  height: 100,
  x: 450,
  y: 550,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "t2.png"; //Qui metti una tua immagine
  }
};
var palazzo1 = {
  speedX: 0,
  speedY: 0,
  width: 65,
  height: 120,
  x: 900,
  y: 530,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "t3.png"; //Qui metti una tua immagine
  }
};
var palazzo2 = {
  speedX: 0,
  speedY: 0,
  width: 65,
  height: 100,
  x: 1250,
  y: 550,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "t2.png"; //Qui metti una tua immagine
  }
};

var line = {
  width: 1500,
  height: 5,
  x: 0,
  y: 650,
  color: "black"
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
      this.image.src = "t-rexxxxx.jpg"; //Qui metti una tua immagine
    }
  };

function updateGameArea() {
  myGameArea.canvas.getContext("2d").clearRect(0,0, myGameArea.canvas.width, myGameArea.canvas.height);
  jump();
  gravity();
  myObject();    
}

function myObject() {
    myGameArea.draw(line);
    myGameArea.drawGameObject(palazzo);
    myGameArea.drawGameObject(palazzo1);
    myGameArea.drawGameObject(palazzo2);
    myGameArea.drawGameObject(animatedObject);
}

let speedUp=0;
let airTime=0;
let fallSpeed=10;

function gravity(){
  if (animatedObject.y + animatedObject.height < line.y){
    animatedObject.y += fallSpeed;
  } else {
      airTime = 0;
  }
}

function jump() {
  animatedObject.y -= speedUp;
  airTime += speedUp;
}

document.addEventListener("keydown",(event)=> {
  if (event.key == "a") {
    speedUp=20;
  }
});
document.addEventListener("keyup",(event)=> {
  if (event.key == "a") {
    speedUp=0;
  }
});

