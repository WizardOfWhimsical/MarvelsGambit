class EntityInformation {
  constructor(entityRresultsObject){
  this.title =  entityRresultsObject.title;
  // this.description = entityRresultsObject.description;
  this.start = entityRresultsObject.start.split(" ");
  this.end = entityRresultsObject.endsplit(" ");
  this.thumbnail = entityRresultsObject.thumbnail;
  }
  createElements(){
    const title = document.createElement("h2");
    // const description = document.createElement("h3");
    const startEndDates = document.createElement("span")
    const descriptionParagraph = document.createElement("p");
    return {title, description, startEndDates, descriptionParagraph}
  }
  setContent(){
    const {title, startEndDates, descriptionParagraph} = this.createElements()
    title.textContent = `${this.title}`
    descriptionParagraph.textContent = `${this.description}`
    startEndDates.textContent = `Stat: ${this.start[0]} - End: ${this.end[0]}`;
    return {title, startEndDates, descriptionParagraph}
  }
  renderEntityInformation(parent){
    const {title, startEndDates, descriptionParagraph} = this.setContent();
    parent.append(title, descriptionParagraph, startEndDates)
  }
}