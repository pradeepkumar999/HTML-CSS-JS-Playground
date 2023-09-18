// Generate a random number between 1 and 6
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var imageName="dice"+randomNumber1+".png";
var imageSource="images/"+imageName;

var image1=document.querySelectorAll("img") [0];
image1.setAttribute("src",imageSource);   


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var imageName2="dice"+randomNumber2+".png";
var imageSource2="images/"+imageName2;

var image2=document.querySelectorAll("img") [1];
image2.setAttribute("src",imageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}