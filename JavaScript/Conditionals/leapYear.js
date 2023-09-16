/*Leap year challenge
i)divible by 4
expect
ii)not divisible by 100
iii)divisible by 400 */

function leap(year){

  if(year%4===0){
        if(year%100===0){
              if(year%400===0){
                    return true;
              }
              else{
                    return false;
              }
              
        }
        else{
              return true;
        }
}
      else{
            return false;
      }

}

var condition=leap(1600);

console.log(condition);