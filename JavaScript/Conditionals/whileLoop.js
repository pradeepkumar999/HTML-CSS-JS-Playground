/*print elements in a array from 1-100 but
1.print fizz instead of 3 multiples
2.print buzz instead of 5 multiples
3.print fizzbuzz incase of divible by both 3 and 5 
*/

var output=[];
var count=1;
function fizzBuzz()
{
  while(count<=100){
  if(count%3===0){
    if(count%5==0){
      output.push("FizzBuzz");
    }
    else{
    output.push("Fizz");
    }
  }
  else if(count%5===0){
    output.push("Buzz");
  }
  
  else{
  output.push(count);
  }
  count++;
  }
  console.log(output);

}
fizzBuzz();
