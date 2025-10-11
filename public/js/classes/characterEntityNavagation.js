class CharacterEntityNavigation {
  constructor(dataObject){
    this.seriesURI = dataObject.data.results[0].series.collectionURI;
    // this.storiesURI = dataObject.data.results[0].stories.collectionURI;
    this.eventsURI = dataObject.data.results[0].events.collectionURI;
  }
  createElement(){
    return document.createElement("a");
  }
  createEnityNavigation(){
    const series = this.createElement();
    // const stories = this.createElement();
    const events = this.createElement();
    return {series, events};
  }
  setNavigationAttributes(){
    const {series, events} = this.createEnityNavigation();
    series.setAttribute("data-uri", this.seriesURI);
    series.textContent = "Series";
    // stories.setAttribute("data-uri", this.storiesURI);
    // stories.textContent = "Stories";
    events.setAttribute("data-uri", this.eventsURI);
    events.textContent = "Events";
    // found out this is shorthand obj k-v
    return {series, events};
  }
  setNavigation(container){
    try{    
      const {series, events} = this.setNavigationAttributes();
    container.append(events, series)
    }catch{err => console.error("Navigation Error: ", err)}
  }
}