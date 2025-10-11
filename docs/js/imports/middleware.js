function normalizeDates(req,res,next){
  console.log(res)
res.locals.data// ||...data.results
  // check if it is an array
  if( Array.isArray(res.local.data)){
    console.log("was array")
    res.locals.data = res.locals.data.map(item => {
      if(item.startYear) item.start = item.startYear;
      if(item.endYear) item.end = item.endYear;
      return item
    }) 
  }
  console.log(res.local.data)
  next()
}

export default normalizeDates

