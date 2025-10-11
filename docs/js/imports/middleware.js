function normalizeDates(req,res,next){
  console.log(res)

  // check if it is an array
  if( Array.isArray(res.arrayMemory)){
    res.arrayMemory = res.arrayMemory.map(item => {
      if(item.startYear) item.start = item.startYear;
      if(item.endYear) item.end = item.endYear;
      return item
    }) 
  }
  console.log(arr)
  next()
}

export default normalizeDates

