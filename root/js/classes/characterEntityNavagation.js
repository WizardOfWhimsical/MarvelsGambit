class CharacterEntityNavigation {
  constructor(dataObject){
    this.seriesURI = dataObject.data.results[0].series.collectionURI;
    this.storiesURI = dataObject.data.results[0].stories.collectionURI;
    this.eventsURI = dataObject.data.results[0].events.collectionURI;
  }
  createElement(){
    return document.createElement("h2");
  }
  createEnityNavigation(){
    const series = this.createElement();
    const stories = this.createElement();
    const events = this.createElement();
    return {series, stories, events};
  }
  setNavigationAttributes(){
    const {series, stories, events} = this.createEnityNavigation();
    series.setAttribute("data-uri", this.seriesURI);
    series.textContent = "Series";
    stories.setAttribute("data-uri", this.storiesURI);
    stories.textContent = "Stories";
    events.setAttribute("data-uri", this.eventsURI);
    events.textContent = "Events";
    // found out this is shorthand obj k-v
    return {series, stories, events};
  }
  setNavigation(container){
    try{    
      const {series, stories, events} = this.setNavigationAttributes();
    container.append(events, series, stories)
    }catch{err => console.error("Navigation Error: ", err)}
  }
}