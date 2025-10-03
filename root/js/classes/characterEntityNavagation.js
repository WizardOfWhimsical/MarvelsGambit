class CharacterEntityNavigation {
  constructor(dataObject){
    this.seriesURL = dataObject.data.results[0].series.collectionURI;
    // this.comicsURL = dataObject.data.results[0].comics.collectionURI;
    this.storiesURL = dataObject.data.results[0].stories.collectionURI;
    this.eventsURL = dataObject.data.results[0].events.collectionURI;
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
      fetch(`/entity?${target}`)
      return container;
    })
  }
}