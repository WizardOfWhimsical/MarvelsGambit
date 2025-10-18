import config from "#config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import md5 from "md5";

const app = express();

app.use(
  cors(),
  morgan('dev'),
  express.json(),
  express.urlencoded({ extended: true }),
  express.static('./public'),
);


   const publicKey = process.env.PUBLIC_KEY;
   const privateKey = process.env.PRIVATE_KEY;


app.get("/api/characters",async (req, res) => {

   const ts = new Date().getTime();
   const hash = md5(ts + privateKey + publicKey);

   const url = `https://gateway.marvel.com/v1/public/characters?name=${req.query.name}&ts=${ts}&apikey=${publicKey}&hash=${hash}` 

   console.log("Root character endpoint hit");
   
 const response = await fetch(url)
 console.log(response)
 if(!response.ok) {
      console.log("ServerFetchTest: ", response.status);
      throw new Error("Character Network response was not ok");
   }
   try{
      const data = await response.json()
      console.log("Data fetched from Marvel character: ", data);
      res.status(201).json(data);
   }catch(err){console.log("character fetchErr", err)}  
})


app.get("/api/entity",async (req,res)=>{

   const ts = new Date().getTime();
   const hash = md5(ts + privateKey + publicKey);

   const offset = ""
   const url = `${req.query.uri}?${offset}ts=${ts}&apikey=${publicKey}&hash=${hash}`

   console.log("Entity endpoint hit", url);
   const response = await fetch(url)

   if(!response.ok){
         console.log("entity fetch !OK on server", response.status);
         throw new Error(`Bad response: ${response.status}, body: ${response.text()}`);
      }

   try{
      const data = await response.json()
      console.log("Data fetched from Marvel entity: ", data);
      res.status(201).json(data);
   }catch(err){console.log("character fetchErr", err)}  

})


app.listen(config.port, () => {
   console.log(`Server is running on port ${config.port}`);
});

app.use((err, req, res, next) => {
   console.error("Server Error: ",err);
   res.status(500).send("Something broke!");
});