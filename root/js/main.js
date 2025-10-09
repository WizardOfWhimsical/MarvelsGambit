const characterNavigation = document.getElementById("entityNavigation");
const characterCard = document.getElementById("characterCard");
const entityInformatiom = document.getElementById("characterInformation");

fetchCharacterData('Gambit').then(data => {
    // console.log('Character Data:', data);
    const gambit = new CharacterEntityNavigation(data);
    const gambitCard = new CharacterImageCard(data);

    gambit.setNavigation(characterNavigation);
    gambitCard.renderCharacterImage(characterCard);
    // You can add more logic here to handle the fetched data
})
.catch(err => console.error('Error fetching character data:', err));


characterNavigation.addEventListener("click", (e) => {
      let target = e.target.dataset.uri;
      console.log("Clicked on: ", target);
      fetchEntityData(target).then(data=>{
            console.log("Entity Data:", data);
        // the array of result
        const results = data.data.results;
        // when clicked add active class to what was clicked

document.querySelectorAll("#characterInformation *").forEach(el => el.remove());








const eventData = new EntityInformation(results[0])
eventData.renderEntityInformation(entityInformatiom)

      }).catch(err => console.error('Error fetching entity data:', err));
    })


/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */