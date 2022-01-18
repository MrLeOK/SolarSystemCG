var earth, clouds, sun , mercury , vernus , mars , jupiter ;
let font;

function preload() {
  font = loadFont('assets/Comfortaa-VariableFont_wght.ttf');
	earth = loadImage('earth-hires2.jpg');
	clouds = loadImage('earth-clouds.png');
  sun = loadImage('sun.jpg');
  mercury = loadImage('mercury.jpg');
  vernus = loadImage('vernus.jpg');
  mars = loadImage('mars.jpg');
  jupiter = loadImage('jupiter.png');
	
}

function setup() {
	createCanvas(windowWidth,windowHeight , WEBGL);
	smooth(2);
  noStroke();
}

function draw() {
	background(0);

  rotateY(millis()/2000);
  
  textFont(font);
  textSize(30);
  textAlign(CENTER, CENTER);
  text('Tran Phuoc Loc - 18521012', 0 , -300 );
  

  texture(sun);
  sphere(170);
	
	// 	Representing the sun
	directionalLight(255,255,255,1,1,-1);
	directionalLight(50,50,50,-1,-1,-1);

	rotateY(millis()/10000);

  // Mercury
  translate(230,0,0);
  texture(mercury);
  sphere(20);
  // Vernus
  translate(235,0,0);
  texture(vernus);
  sphere(30);
  // Earth
	translate(250,0,0);
	texture(earth);
	sphere(40);
  // Mars
  translate(250,0,0);
  texture(mars);
  sphere(25);
	// Jupiter
  translate(250,0,0);
  texture(jupiter);
  sphere(120);

}
