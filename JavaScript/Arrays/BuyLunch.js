//randomly selecting a person to buy lunch from the given list of names
function buyLunch(nameList) {
    var numberOfPersons = nameList.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPersons);
    var person = nameList[randomPersonPosition];
    return person + " is going to buy lunch today.";
  }
  
  var names = ["sai", "ramesh", "nagaraju", "shiva", "pradeep"];
  
  var selectedPerson = buyLunch(names);
  console.log(selectedPerson);
  