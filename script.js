function startGame() {

    myGameArea.start();
    animatedObject.loadImages();
    
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
    x: 10,
    y: 550,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "trex.png"; //Qui metti una tua immagine
    }
  };

function updateGameArea() {
    myGameArea.canvas.getContext("2d").clearRect(0,0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.draw(line);
    myGameArea.drawGameObject(animatedObject);
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.gravitySpeed += this.gravity;
      this.x += this.speedX;
      this.y += this.speedY + this.gravitySpeed;
    }
  }

