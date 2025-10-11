class EntityInformation {
  constructor(entityRresultsObject){
  this.title =  entityRresultsObject.title;
  this.description = entityRresultsObject.description;
  this.start = entityRresultsObject.start || entityRresultsObject.startYear;
  this.end = entityRresultsObject.end || entityRresultsObject.endYear;
  this.thumbnail = `${entityRresultsObject.thumbnail.path}.${entityRresultsObject.thumbnail.extension}`;

/**
 *     this.imageSrc = `${object.data.results[0].thumbnail.path}.${object.data.results[0].thumbnail.extension}`;
 */

  }
  createElements(){
    const title = document.createElement("h3");
    const startEndDates = document.createElement("em")
    const descriptionParagraph = document.createElement("p");

    return { title, startEndDates, descriptionParagraph}
  }
  setContent(){

    const start = typeof this.start  === "string"?this.start.split(" ")[0]:this.start;
    const end = typeof this.end  === "string"?this.end.split(" ")[0]:this.end;

    // console.log("log inside class to see the ternary work", start, end)
    const {title, startEndDates, descriptionParagraph} = this.createElements()
    // console.log(this.description)
    title.textContent = `${this.title}`
    if(this.description === null){
      this.description = "No description provided. Sorry :'-("
    }
    descriptionParagraph.textContent = `${this.description}`
    startEndDates.textContent = `Stat: ${start} - End: ${end}`;

    return {title, startEndDates, descriptionParagraph}
  }
  renderEntityInformation(parent){
    const {title, startEndDates, descriptionParagraph} = this.setContent();
    parent.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
  url(${this.thumbnail})
  center/80% no-repeat`
    parent.prepend(title, descriptionParagraph, startEndDates)
  }
}