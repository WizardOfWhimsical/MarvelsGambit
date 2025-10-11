class CharacterEntityNavigation {
  constructor(dataObject){
    // Validate data structure exists
    if (!dataObject?.data?.results?.[0]) {
      console.error('Invalid data passed to constructor:', dataObject);
      throw new Error('Invalid character data: missing results array');
    }
    
    const character = dataObject.data.results[0];
    
    // Validate required properties exist
    if (!character.series?.collectionURI) {
      throw new Error('Character missing series data');
    }
    if (!character.stories?.collectionURI) {
      throw new Error('Character missing stories data');
    }
    if (!character.events?.collectionURI) {
      throw new Error('Character missing events data');
    }
    
    this.seriesURL = character.series.collectionURI;
    // this.comicsURL = character.comics.collectionURI;
    this.storiesURL = character.stories.collectionURI;
    this.eventsURL = character.events.collectionURI;
    
    console.log('✅ CharacterEntityNavigation initialized successfully');
  }
  createElement(){
    return document.createElement('div');
  }
  createEnityNavigation(){
    const seriesEl = this.createElement();
    const storiesEl = this.createElement();
    const eventsEl = this.createElement();
    return {series:seriesEl, stories:storiesEl, events:eventsEl};
  }
  setNavigationAttributes(){
    const {series, stories, events} = this.createEnityNavigation();
    series.setAttribute("data-url", this.seriesURL);
    series.textContent = "Series";
    stories.setAttribute("data-url", this.storiesURL);
    stories.textContent = "Stories";
    events.setAttribute("data-url", this.eventsURL);
    events.textContent = "Events";
    // found out this is shorthand obj k-v
    return {series, stories, events};
  }
  setNavigation(container){
    const {series, stories, events} = this.setNavigationAttributes();
    container.append(events, series, stories)
    container.addEventListener("click", (e) => {
      let target = e.target.dataset.url;
      console.log("Clicked on: ", target);
      // fetch("/entity/" + target)
      return container;
    })
  }
}