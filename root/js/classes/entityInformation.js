class EntityInformation {
  constructor(entityRresultsObject){
  this.title =  entityRresultsObject.title;
  this.description = entityRresultsObject.description;
  this.start = entityRresultsObject.start;
  this.end = entityRresultsObject.end;
  this.thumbnail = entityRresultsObject.thumbnail;
  }
  createElements(){
    const title = document.createElement("h2");
    // const description = document.createElement("h3");
    const startEndDates = document.createElement("span")
    const descriptionParagraph = document.createElement("p");
    const previous = document.createElement("h1")
    const next = document.createElement("h1")
    return {previous, title, startEndDates, descriptionParagraph, next}
  }
  setContent(){
    const start = this.start.split(" ")
    const end = this.end.split(" ")
    const {previous, title, startEndDates, descriptionParagraph, next} = this.createElements()
    previous.textContent = "<"
    previous.setAttribute("id", "previous")
    next.textContent = ">"
    next.setAttribute("id", "next")
    title.textContent = `${this.title}`
    descriptionParagraph.textContent = `${this.description}`
    startEndDates.textContent = `Stat: ${start[0]} - End: ${end[0]}`;
    return {previous, title, startEndDates, descriptionParagraph, next}
  }
  renderEntityInformation(parent){
    const {previous, title, startEndDates, descriptionParagraph, next} = this.setContent();
    parent.append(previous, title, descriptionParagraph, startEndDates, next)
  }
}