async function fetchCharacterData(characterName) {
  try{
    const response = await fetch(`/api/characters?name=${characterName}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const characterData = await response.json();
    return characterData;

  }catch (error) {
    console.log('try/catch of characterDataFetch:', error);
  }
}

async function fetchEntityData(entityUri) {
  try{
    const response = await fetch(`/api/entity?uri=${entityUri}`);

   if (!response.ok) {
    console.log("Marvel returned:", response.status);
    const text = await response.text();  // this shows HTML or empty string
    throw new Error(`Bad response: ${response.status}, body: ${text}`);
   }

    const entityList = await response.json();
    return entityList;

  }catch(error){
    console.log("try/catch of entityData:", error)
  }
}

function clearList(parent, arrayOfElRemoved) {
  for(let el of arrayOfElRemoved){
  if (parent.querySelectorAll(el).length > 0) {
  parent.querySelectorAll(el).forEach((kid) => {
    kid.remove();
  })
  };
}
}

function previousNextLogic(resultsArray, parent, dataInput, num){
let count = num;
switch(dataInput){
  case "previous":
count--
break;
case "next":
  count++
  break
}
  const eventData = new EntityInformation(resultsArray[count])
  eventData.renderEntityInformation(parent)
return count
}

function carrotsHideShow(){
    if(count === 0){
    // add style display none to first child
    console.log("count zero hit: state change?");
    next.classList.toggle("hidden");
    // divBtns.firstChild.style.display = "none"
    //  divBtns.lastChild.classList.add("end")
}else if(count === results.length-1){
    console.log("end of array: still state change?");
    next.classList.toggle("hidden");
// divBtns.lastChild.style.display = "none"
}else{
    console.log("show?")
    prev.classList.toggle("hidden");
    next.classList.toggle("hidden");
}
}