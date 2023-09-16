/*
99 bottles of beer song
*/

var count=99;

function song(count){
  while(count>0){
    console.log(count+" bottles of beer on the wall," +count+" bottles of beer.");
    count--;
    console.log("Take one down and pass it around,"+count+" bottles of beer on the wall. ")
  }
  if(count===0){
    console.log("No bottles of beer on the wall,No bottles of beer.");
    console.log("Take none down and pass it around, zero bottles of beer on the wall. ")

  }
}

song(count);

