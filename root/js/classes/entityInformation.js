class EntityInformation {
  constructor(entityRresultsObject){
  this.title =  entityRresultsObject.title;
  this.description = entityRresultsObject.description;
  this.start = entityRresultsObject.start;
  this.end = entityRresultsObject.end;
  this.thumbnail = entityRresultsObject.thumbnail;
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
    const {title, startEndDates, descriptionParagraph} = this.createElements()

    title.textContent = `${this.title}`
    descriptionParagraph.textContent = `${this.description}`
    startEndDates.textContent = `Stat: ${start} - End: ${end}`;

    return {title, startEndDates, descriptionParagraph}
  }
  renderEntityInformation(parent){
    const {title, startEndDates, descriptionParagraph} = this.setContent();
    parent.prepend(title, descriptionParagraph, startEndDates)
  }
}