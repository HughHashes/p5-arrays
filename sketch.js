var words = ["bad CHOICE", "Annoying VOICE", "No HUSTLE", "Can't Be OPTIMISTIC about him", "Wouldn't CONSIDER hiring him", "JK JK JK", "SIKE I Lied", "Less GRIT then the lakers"]

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
        image(images[i],(i+1)*100, 200, 100, 100);
    }
    
    fill(255);
    textSize(25);
    text(words[j], 200, 150);
    
}

function mousePressed(){
    j ++;
    if(j == words.length){
        j = 0;
    }
}

//This is a joke Mr. Budi is actually a great teacher who we are lucky to have work here.