function setup() {
    createCanvas(1550, 800);
    background("black")
}

function draw(){
    if (keyDown("up")){
        background("red")
    }    
    if(keyDown("down")){
        background("blue")
    }    
    if(keyDown("left")){
        background("orange")
    }
    if(keyDown("right")){
        background("green")            
    }
    if(keyDown("space")){
        background("black")            
    }
    drawSprites();
}