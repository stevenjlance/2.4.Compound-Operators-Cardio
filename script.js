function setup() {
  createCanvas(600, 600);
	
}

function draw() {
	background(200)
	text(mouseX + ", " + mouseY, 20, 20)

	// Challenge #1
	// if(mouseX >= 200 && mouseX <=400){
 //    ellipse(random(width/2 - 100,width/2 + 100),random(height/2 -100,height/2 + 100),10,10)
	// }

	// Challenge #2
	
	if(mouseX > 100 && mouseX < 150 && mouseY > 100 && mouseY < 150){
		fill("red")
	}
	else{
		fill("white")
	}
	rect(100, 100, 50, 50)

	// Challenge #3
	if(mouseX > 175 && mouseX < 225 && mouseY > 100 && mouseY < 150){
		fill("blue")
	}
	else{
		fill("white")
	}
	rect(175, 100, 50, 50)

	// Challenge #4
	// Repeat the process above but for a grid of 9 x 9
	
}