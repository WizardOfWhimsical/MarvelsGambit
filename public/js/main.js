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

let count = 0;//for information cycling, indxPos
let results;
const divBtns = entityInformation.querySelector("div");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

characterNavigation.addEventListener("click", (e) => {

      let target = e.target.dataset.uri;
      console.log("Clicked on: ", target);
      
    fetchEntityData(target).then(data=>{

        console.log("Entity Data:", data);
        results = data.data.results;

    clearList(entityInformation, ["h3","p","em"])

    const eventData = new EntityInformation(results[0])
    eventData.renderEntityInformation(entityInformation)
    carrotsHideShow()

      }).catch(err => console.error('Error fetching entity data:', err));
    })


divBtns.addEventListener("click",(e)=>{

    console.log("results inside event listener")
    clearList(entityInformation, ["h3","p","em"])
    let choice = e.target.dataset.carrot
    count = previousNextLogic(results, entityInformation, choice, count)
    carrotsHideShow()
    console.log("are you increasing",count)

})



     








/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */