var canvas;
var music;
var box1, box2, box3, box4;

var ball;

var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(100 , 580, 200, 30)
    box1.shapeColor="red"

    box2 = createSprite(310 , 580, 200, 30)
    box2.shapeColor="green"

    box3 = createSprite(520 , 580, 200, 30)
    box3.shapeColor="blue"

    box4 = createSprite(730 , 580, 200, 30)
    box4.shapeColor="yellow"


    ball = createSprite(random(20, 750) , 80, 30, 30)
    ball.shapeColor="white"
    ball.velocityY = 6
    ball.velocityX = 6


    music.play()

}

function draw() {
    background(rgb(169,169,169));

    
    edges = createEdgeSprites()


    ball.bounceOff(edges)
    

    if(ball.isTouching(box1)){
        ball.shapeColor = "red"
    }

    if(ball.isTouching(box2)){
        ball.shapeColor = "green"
    }


    if(ball.isTouching(box3)){
        ball.shapeColor = "blue"
    }


    if(ball.isTouching(box4)){
        ball.shapeColor = "yellow"
    }

    
    drawSprites();
}
