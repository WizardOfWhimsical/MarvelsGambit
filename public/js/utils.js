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
    const text = await response.text();
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
    console.log("count zero hit: state change?");
    next.classList.remove("hidden");
}else if(count === results.length-1){
    console.log("end of array: still state change?");
    next.classList.add("hidden");
}else{
    console.log("show?")
    prev.classList.remove("hidden");
    next.classList.remove("hidden");
}
}