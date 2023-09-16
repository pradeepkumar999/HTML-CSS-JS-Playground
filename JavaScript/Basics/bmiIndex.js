var bmi=bmiIndex(58,1.5);

function bmiIndex(weight,height){
  var index=weight/(height*height); //Math.pow(height,2)  //Math.round(index)
  return index;
}

console.log(bmi);