class CharacterEntityNavigation {
  constructor(dataObject){
    this.seriesURI = dataObject.data.results[0].series.collectionURI;
    this.eventsURI = dataObject.data.results[0].events.collectionURI;
  }
  setNavigationAttributes(){
    const series = document.createElement("a");
    const events = document.createElement("a");



    series.setAttribute("data-uri", this.seriesURI);
    series.textContent = "Series";

    events.setAttribute("data-uri", this.eventsURI);
    events.textContent = "Events";

    return {series, events};
  }
  setNavigation(container){
    try{    
      const {series, events} = this.setNavigationAttributes();

      container.append(events, series)
    }catch{err => console.error("Navigation Error: ", err)}
  }
}