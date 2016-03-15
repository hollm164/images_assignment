//================================
//	view your project using anvil at:
//	http://images.dev
//
// or after you upload it to github at:
//	http://yourusername.github.io/images/
//================================

//STEP 1: Declare global variables for your images and upload button
var brain;
var seed;
var flower;
var uploadedImage;

function preload(){
	//STEP 2:
	// Load your image with loadImage("path/to/image.jpg")
	//and save it to your global variable:

	brain = loadImage("images/brain-wrinkles.jpg");
	seed = loadImage("images/seed.png");
	flower = loadImage("images/pink flower.gif");

}

function setup() {

	//STEP 3
	//add a file upload button with CreateFileInput(_____);
	var uploadButton = createFileInput(imageUploaded);

	//STEP 4:
  //set up your canvas with createCanvas(__,__);
	createCanvas(brain.width, brain.height);

}


function draw() {


	//STEP 5:
	//draw your images with image(imagevariable);
	background(brain);

	//STEP 7:
	//You're also going to need an if statement here to check
	//if the image the user uploaded exists to then draw it
	//(see image upload example version 2)
	if(mouseIsPressed){
		imageMode(CENTER);
		image(flower,mouseX,mouseY, flower.width, flower.height);
	} else {
		imageMode(CENTER);
		image(seed,mouseX,mouseY, seed.width. seed.height);
	}

}

//STEP 6:
//create a callback function (you can name it anything you'd like)
//which will be called when the user uploads an image:
function imageUploaded(file){
	uploadedImage = loadImage(file.data, drawImg);
}

function drawImg(){
	image(uploadedImage,0,0);
}
	//and inside it you will need to save the loaded image to a global variable
