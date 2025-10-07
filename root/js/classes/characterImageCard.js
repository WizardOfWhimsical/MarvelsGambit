class CharacterImageCard {
  constructor(object) {
    this.imageSrc = `${object.data.results[0].thumbnail.path}.${object.data.results[0].thumbnail.extension}`;
    this.name = object.data.results[0].name;
    // console.log("inside class",this.imageSrc, this.name);
  }
createElements(){
  const imgTag = document.createElement("img");
  const h2Tag = document.createElement("h2")
  return {imgTag, h2Tag};
}
setAttributes(){
  const {imgTag, h2Tag} = this.createElements();
  imgTag.setAttribute("src", this.imageSrc);
  imgTag.setAttribute("alt", this.name);
  h2Tag.textContent = this.name;
  return {imgTag, h2Tag};
}
renderCharacterImage(parent){
  const {imgTag, h2Tag} = this.setAttributes();
  parent.append(imgTag, h2Tag)
}
}