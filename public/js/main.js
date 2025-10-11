const characterNavigation = document.getElementById("entityNavigation");
const characterCard = document.getElementById("characterCard");
const entityInformation = document.getElementById("characterInformation");

async function main(){
    try{
        const data = await fetchCharacterData('Gambit')

        const gambit = new CharacterEntityNavigation(data);
        const gambitCard = new CharacterImageCard(data);

        gambit.setNavigation(characterNavigation);
        gambitCard.renderCharacterImage(characterCard);
    }
   catch(err){console.log("Cahracter fetch", err)}
   
}
main()


let count = 0;
let results;

const divBtns = entityInformation.querySelector("div");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

characterNavigation.addEventListener("click", async (e) => {

    let target = e.target.dataset.uri;
    console.log("Clicked on: ", target);
    try{    
        const response = await fetchEntityData(target)
        console.log("response",response)
        
        results = response.data.results

        clearList(entityInformation, ["h3","p","em"])

        const eventData = new EntityInformation(results[0])

        eventData.renderEntityInformation(entityInformation)

        carrotsHideShow()   
    }catch(err){
        console.log(err)
    }
    })


divBtns.addEventListener("click",(e)=>{

    console.log("results inside event listener")
    clearList(entityInformation, ["h3","p","em"])

    let choice = e.target.dataset.carrot

    count = previousNextLogic(results, entityInformation, choice, count)
    carrotsHideShow()

})



     








/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */