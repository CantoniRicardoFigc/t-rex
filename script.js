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
var tree = {
  width: 20,
  height: 50,
  x: 500,
  y: 600,
  color: "black"
};
var tree1 = {
  width: 20,
  height: 80,
  x: 850,
  y: 570,
  color: "black"
};
var tree2 = {
  width: 20,
  height: 65,
  x: 1300,
  y: 585,
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
    myGameArea.draw(tree);
    myGameArea.draw(tree1);
    myGameArea.draw(tree2);
    myGameArea.drawGameObject(animatedObject);
}

