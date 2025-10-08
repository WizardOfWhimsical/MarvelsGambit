const characterNavigation = document.getElementById("entityNavigation");
const characterCard = document.getElementById("characterCard");

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
            // then i do stuff
      }).catch(err => console.error('Error fetching entity data:', err));
    })


/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */