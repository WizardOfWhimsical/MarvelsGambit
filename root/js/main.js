const characterNavigation = document.getElementById("entityNavigation");
const characterCard = document.getElementById("characterCard");
const entityInformation = document.getElementById("characterInformation");

fetchCharacterData('Gambit').then(data => {
    // console.log('Character Data:', data);
    const gambit = new CharacterEntityNavigation(data);
    const gambitCard = new CharacterImageCard(data);

    gambit.setNavigation(characterNavigation);
    gambitCard.renderCharacterImage(characterCard);
    // You can add more logic here to handle the fetched data
})
.catch(err => console.error('Error fetching character data:', err));

let count = 1;//zero auto loads
let results;

characterNavigation.addEventListener("click", (e) => {
      let target = e.target.dataset.uri;
      console.log("Clicked on: ", target);
      
      fetchEntityData(target).then(data=>{
            console.log("Entity Data:", data);
        // the array of result
        results = data.data.results;
        // when clicked add active class to what was clicked

// clearCharacterInformation()
clearList(entityInformation, ["h3","p","em"])
// clearList(entityInformation, "p")


// this is not right. not for carets. comeon dude
const eventData = new EntityInformation(results[0])
eventData.renderEntityInformation(entityInformation)


      }).catch(err => console.error('Error fetching entity data:', err));
    })

// MAKE THE CARETS SEPERATTE, IDIOT! dont forget again, love ya 

const divBtns = entityInformation.querySelector("div")

// if(count === 0){
//     // add style display none to first child
//     divBtns.firstChild.style.display = "none"
//     //  divBtns.lastChild.classList.add("end")
// }else if(count === results.length-1){
// divBtns.lastChild.style.display = "none"
// }

divBtns.addEventListener("click",(e)=>{

    console.log("results insode event listener", results)
    clearList(entityInformation, ["h3","p","em"])
    // clearCharacterInformation()
    let choice = e.target.dataset.carrot
   previousNextLogic(results, entityInformation, choice, count)
   if(choice === "previous"){
    count--
   }else{count++}

console.log(count)

})



     








/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */