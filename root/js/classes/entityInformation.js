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
    const start = this.start.split(" ")
    const end = this.end.split(" ")

    const {title, startEndDates, descriptionParagraph} = this.createElements()

    title.textContent = `${this.title}`
    descriptionParagraph.textContent = `${this.description}`
    startEndDates.textContent = `Stat: ${start[0]} - End: ${end[0]}`;

    return {title, startEndDates, descriptionParagraph}
  }
//   previousNextCarrots(){
//     const container = document.createElement("div")
//     const previous = document.createElement("h1")
//     const next = document.createElement("h1")

//     previous.textContent = "<"
//     previous.setAttribute("id", "previous")
//     previous.setAttribute("data-carrot", "previous")
//     next.textContent = ">"
//     next.setAttribute("id", "next")
//     next.setAttribute("data-carrot", "next")

// container.classList.add("container")

//     container.append(previous, next)
//     return container
//   }
  renderEntityInformation(parent){
    const {title, startEndDates, descriptionParagraph} = this.setContent();
    // const prevNextBtn = this.previousNextCarrots()
    parent.append(title, descriptionParagraph, startEndDates)
  }
}