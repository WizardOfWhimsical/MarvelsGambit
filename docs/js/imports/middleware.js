function normalizeDates(req,res,next){
  let arr = res.data.results
  // check if it is an array
  if( Array.isArray(arr)){
    arr = arr.map(item => {
      if(item.startYear) item.start = item.startYear;
      if(item.endYear) item.end = item.endYear;
      return item
    }) 
  }
  console.log(arr)
  next();
}

export default normalizeDates

