
var database;
var gameState=0;
var playerCount=0;
var game, player, form; 

function setup(){
    createCanvas(500,500);
  

    // .ref()     ------ set position of where to read or write from 
    // .on()       -------read from the database
    //.set() ------------- writes into the database
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
   
}

function draw(){
    background("white");
    
}
