var youName=prompt("enter you name");
var yourLove=prompt("enter your love name");

var n=Math.random();
      n=n*100;
      n=Math.floor(n)+1;
alert("your love percentage is "+n);

if(n>70){
      alert("pure");
}

if(n>30&&n<=70){
      alert("simple");
}
else{
      alert("better");
}