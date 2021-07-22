var factList= [
 "The most common type of debris found on beaches is all single-use plastic bags", 
 "Each year over 1 million different animals are killed due to ocean pollution which includes entaglement of nets or ingestion of plastic", 
 "There are 500 dead zones in the world which can no longer retain sea life as big as the gulf of mexico due to pollution", 
 "Restoring the ocean could nearly solve world hunger by feeding 1 million people healthy seafood"];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count=0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}
function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count==factList.length){
    count=0;
  }
}

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");


if (scriptBtn) {
  scriptBtn.addEventListener("click", generatescript);
}

function generatescript(){
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hi! My name is "+name+". I am from "+location+". I am a student wanting to get involved in helping the ocean and create a better home for all of us, especially marine life. I wanted to help out by "+learning+". Please let me know what other opportunities you have to make a change.";                                     
}


