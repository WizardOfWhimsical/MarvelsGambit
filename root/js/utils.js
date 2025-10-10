async function fetchCharacterData(characterName) {
  try{
    const response = await fetch(`/api/characters?name=${characterName}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const characterData = await response.json();
    // this returns the fullfilled promise as data, no more chaining needed
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

// function clearCharacterInformation(){
//   document.querySelectorAll("#characterInformation *").forEach(el => el.remove());
// }
// const parent = queryselector("article")

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






/*
    fetch("/p")
    .then(r => r.json())
    .then(data => {
        const entityNavigation = new CharacterEntityNavigation(data);
        entityNavigation.setNavigation(navContainer);
        // console.log(entityNavigation)
        // console.log("Data received from server:", data);
    })
    .catch(err => console.error('Error fetching from server:', err));
*/