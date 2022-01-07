
function startGame() {

  myGameArea.start();

  sfondo.loadImages();
  uccello.loadImages();
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
        this.interval = setInterval(updateGameAreaSuond, 5000);
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

//disegno palazzi\trex\sfondo\uccello
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
  x: 400,
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
  x: 1380,
  y: 570,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "troccia.png"; //Qui metti una tua immagine
  }
};
var uccello = {
  speedX: 0,
  speedY: 0,
  width: 30,
  height: 20,
  x: 1800,
  y: 370,

loadImages: function() {
    this.image = new Image(this.width, this.height);
    this.image.src = "uccellino.png"; //Qui metti una tua immagine
  }
};
var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 150,
    height: 120,
    x: 50,
    y: 530,
    imageList: [], //Vettore che conterrà tutte le immagini caricate
    contaFrame: 0, //Tiene conto di quanti frame sono passati
    actualFrame: 0, //Specifica quale frame disegnare
  
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.contaFrame++;
      if (this.contaFrame == 5) {
        this.contaFrame = 0;
        this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
        this.image = this.imageList[this.actualFrame];
      }
    },

    loadImages: function() {
      for (imgPath of running) {
       var img = new Image(this.width, this.height);
       img.src = imgPath;
       this.imageList.push(img);
     }
     this.image = this.imageList[this.actualFrame];
   }
 };

function updateGameArea() {
  document.getElementById("punteggio").innerHTML = x
  myGameArea.canvas.getContext("2d").clearRect(0,0, myGameArea.canvas.width, myGameArea.canvas.height);
  jump();
  gravity();
  myObject(); 
  punteggio(); 

  collision(palazzo);
  collision(palazzo1);
  collision(palazzo2);

  rocks(palazzo);
  rocks(palazzo1);
  rocks(palazzo2);

  moveUcc(uccello);

  animatedObject.update();
}

function updateGameAreaSuond() {
}

let n=5
function rocks(palazzo) {
  if (palazzo.x>0) {
    palazzo.x -= n;
  }
  else {
    palazzo.x = 1500;
    if (n<=15) {
      n+=0.2;
    }
    if (fallSpeed<=12) {
      fallSpeed+=0.2;
    }
    if (contaFrame>=0) {
      contaFrame-=1
    }
  }
}

let u=3
function moveUcc(uccello) {
  if (uccello.x>0) {
    uccello.x-=u;
  }
  else {
    uccello.x=1800;
  }
}

function myObject() {
    myGameArea.drawGameObject(sfondo);
    myGameArea.drawGameObject(palazzo);
    myGameArea.drawGameObject(palazzo1);
    myGameArea.drawGameObject(palazzo2);
    myGameArea.drawGameObject(animatedObject);
    myGameArea.drawGameObject(uccello);
}

let speedUp=0;
let airTime=0;
let fallSpeed=6;

function gravity(){
  if (animatedObject.y + animatedObject.height < 650){
    animatedObject.y += fallSpeed;
  } else {
      airTime = 0;
  }
}

function jump() {
  if (airTime < 300)
  animatedObject.y -= speedUp;
  airTime += speedUp;
}

let x=0;
let punt=false;

function punteggio() {
  if (punt==false) {
    x+=1;
  }
}

document.addEventListener("keydown",(event)=> {
  if (event.key == "a") {
    speedUp=35;
    var snd = new Audio("vJJ.mp3");
    snd.play();
  }
});
document.addEventListener("keyup",(event)=> {
  if (event.key == "a") {
    speedUp=0;
  }
});

let allerta=false;

function collision(box) { //collisioni
  let playerWidth = animatedObject.x + animatedObject.width;
  let playerHeight = animatedObject.y + animatedObject.height;
  let boxWidth = box.x + box.width + 5;

  if (playerWidth > box.x + 60 & animatedObject.x < boxWidth - 60 & playerHeight > box.y + 40){
    location.reload();
    alert("Hai perso! punteggio finale: "+x);
  }
}
