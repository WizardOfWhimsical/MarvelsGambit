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
let originalText;

characterNavigation.addEventListener("click", async (e) => {

    let target = e.target.dataset.uri;
    let btn = e.target
    console.log("Clicked on: ", target);

    const originalText = btn.textContent;
    btn.textContent = "Loading...";
    btn.disabled = true;


    try{    
        const response = await fetchEntityData(target)
        console.log("response",response)
        
        // check err response
        // if(!response.ok){
        //     throw new Error(`Server Error: ${response.status}`)
        // }

        
        const data = await response

        //check is data is good
        if(!data?.data?.results?.[0]){
            throw new Error("No Character Events/Series data found")
        }

        console.log("✅ Data received from server:", data);

        results = data.data.results

        clearList(entityInformation, ["h3","p","em"])

        const eventData = new EntityInformation(results[0])

        eventData.renderEntityInformation(entityInformation)

        carrotsHideShow() 
        
        btn.textContent = "✅ Information Loaded!";
        setTimeout(()=>{
            btn.textContent = originalText;
            btn.disabled = false;
        },2000)
        
    }catch(err){
        console.log("❌ Error:", err);

    entityInformation.innerHTML = `<div style="color: #ff4444; padding: 20px; background: #ffe6e6; border-radius: 8px; text-align: center;">
                    <h3 style="margin-top: 0;">❌ Error Loading Character</h3>
                    <p style="margin: 10px 3em; font-size: 1.5em; text-align: center;">${err.message}</p>
                    <button onclick="location.reload()" style="padding: 10px 20px; cursor: pointer; background: #ff4444; color: white; border: none; border-radius: 4px; font-size: 14px;">
                        🔄 Try Again
                    </button>
                </div>`
    btn.textContent = `❌ ${err.message}`
    setTimeout(()=>{
                btn.textContent = originalText;
                btn.disabled = false;
            },2000)
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