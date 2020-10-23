const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score = 0;

var player, ground, deadLine, lineImg, backGroundImg, backGround, obstacle;
var gameState = 0;

function preload(){
	backGroundImg = loadImage("images/backg.jpg");
	lineImg = loadImage("images/bolt.png");
}

function setup() {
	createCanvas(800, 600);
  
	backGround = createSprite(500,300);
	backGround.addImage("images/backg.jpg",backGroundImg);
	backGround.scale = 1.8;
	backGround.x = backGround.width /2;
	backGround.velocityX = -4;
	
	deadLine = createSprite(200,5,1000,20);
	deadLine.addImage("images/bolt.png",lineImg);

	engine = Engine.create();
	world = engine.world;

	player = new Player(50,570);

	ground = new Ground(250,590,2000,20);

	obstacle = new Obstacle(-50,0,50,50);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  	background(255);	

	  if (backGround.x < 0){
		backGround.x = backGround.width/2;
	  }

	drawSprites();

	Matter.Body.applyForce(obstacle.body,obstacle.body.position,{x:-4,y:0});
	if(gameState === 0){
		if(frameCount % 100 === 0){
			obstacle = new Obstacle(1000,(150,350),50,random(100,325));
		}
		if(frameCount % 50 === 0){
			score = score + 25;
		}
		if(keyIsDown(UP_ARROW)){
			Matter.Body.applyForce(player.body,player.body.position,{x:0,y:-5});
		}
	}

	noStroke();
	textSize(30);
	fill(100);
	text("Score  " + score, 525, 35);
	noStroke();
	textSize(30);
	fill(100);
	text("/  1000", 700, 35);

	noStroke();
	textSize(20);
	fill(100);
	text("Press Up Arrow key to go up", 25, 35);

	if(player.body.position.y <= 40 ){
		gameState = 1;
	}

	if(player.body.position.x <= 0 ){
		gameState = 1;
	}

	if(score === 1000){
		gameState = 1;
	}

	if(gameState === 1){
		backGround.velocityX = 0;
		stroke(255);
		strokeWeight(5);
		textSize(75);
		fill(50);
		text("Game Over", 275, 150);
	}
 
 	ground.display();
 	player.display();
	obstacle.display();

}
