/*
fibonacci series
*/

function fibonacci(num) {
    var output = [];
  
    if (num >= 1) {
      output.push(0);
    }
    if (num >= 2) {
      output.push(1);
    }
  
    for (var i = 2; i < num; i++) {
      var value = output[i - 1] + output[i - 2];
      output.push(value);
    }
  
    return output;
  }
  
  var ans = fibonacci(2); // Replace 10 with the desired number of Fibonacci numbers you want
  console.log(ans);
  