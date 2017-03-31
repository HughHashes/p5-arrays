//This is a joke Mr. Budi is actually a great teacher who we are lucky to have work here.

var words = ["bad CHOICE", "Annoying VOICE", "No HUSTLE", "Can't Be OPTIMISTIC about him", "Wouldn't CONSIDER hiring him", "JK JK JK", "SIKE I Lied", "Less GRIT then the lakers", "This is a joke Mr. Budi is actually a great teacher who we are lucky to have work here."]

var j = 0;

var images = Array(5);



function preload(){
    images[0] = loadImage('budi1.jpg');
    images[1] = loadImage('budi2.jpg');
    images[2] = loadImage('budi3.jpg');
    images[3]= loadImage('budi4.jpg');
    images[4]= loadImage('budi5.jpg');
    
    
}

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(0);
    
    for(var i = 0; i < 5; i++){
        image(images[i],(i)*110, 200, 100, 100);
    }
    
    fill(255);
    textSize(16);
    text(words[j], 10, 150);
    
}

function mousePressed(){
    j ++;
    if(j == words.length){
        j = 0;
    }
}

