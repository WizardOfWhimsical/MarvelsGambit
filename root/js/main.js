const characterNavigation = document.getElementById("entityNavigation");

fetchCharacterData('Gambit').then(data => {
    console.log('Character Data:', data);
    const gambit = new CharacterEntityNavigation(data);

    gambit.setNavigation(characterNavigation);
    // You can add more logic here to handle the fetched data
});


characterNavigation.addEventListener("click", (e) => {
      let target = e.target.dataset.uri;
      console.log("Clicked on: ", target);
    //   fetch(`/entity?${target}`)
    //   return container;
    })


/**
 * adding eventlisterner i think wll be smater on this page or utils.js, talk with mentor and find out
 * 
 */