var guestList=["sai","ramesh","nagaraju","shiva","pradeep"];
var find=prompt("enter the guest name");
if(guestList.includes(find)){
  alert("welcome "+find);
}
else{
  alert("sorry next time");
}