const characterNavigation = document.getElementById("entityNavigation");
const characterCard = document.getElementById("characterCard");
const entityInformation = document.getElementById("characterInformation");

fetchCharacterData('Gambit').then(data => {
    // console.log('Character Data:', data);
    const gambit = new CharacterEntityNavigation(data);
    const gambitCard = new CharacterImageCard(data);

    gambit.setNavigation(characterNavigation);
    gambitCard.renderCharacterImage(characterCard);
   
})
.catch(err => console.error('Error fetching character data:', err));

let count = 0;//zero auto loads
let results;
const divBtns = entityInformation.querySelector("div");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

characterNavigation.addEventListener("click", (e) => {
      let target = e.target.dataset.uri;
      console.log("Clicked on: ", target);
      
      fetchEntityData(target).then(data=>{

        console.log("Entity Data:", data);
            //need to check whats different from between entities
        results = data.data.results;

    clearList(entityInformation, ["h3","p","em"])

    const eventData = new EntityInformation(results[0])
    eventData.renderEntityInformation(entityInformation)
    carrotsHideShow()

      }).catch(err => console.error('Error fetching entity data:', err));
    })

// MAKE THE CARETS SEPERATTE, IDIOT! dont forget again, love ya 

// const divBtns = entityInformation.querySelector("div");
// const prev = document.getElementById("previous");
// const next = document.getElementById("next");



divBtns.addEventListener("click",(e)=>{




    console.log("results inside event listener")
    clearList(entityInformation, ["h3","p","em"])
    // clearCharacterInformation()
    let choice = e.target.dataset.carrot
   count = previousNextLogic(results, entityInformation, choice, count)
   carrotsHideShow()
//    if(choice === "previous"){
//     count--
//    }else{count++}

console.log(count)

})



     








/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */