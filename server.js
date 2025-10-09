import config from "#config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
// import dotenv from "dotenv";
import md5 from "md5";

// dotenv.config();
// console.log("helloworld");
const app = express();
// app.use(cors());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("./root"));

app.use(
  cors(),
  morgan('dev'),
  express.json(),
  express.urlencoded({ extended: true }),
  express.static('./root'),
);

const ts = new Date().getTime();
   const publicKey = process.env.PUBLIC_KEY;
   const privateKey = process.env.PRIVATE_KEY;
   const hash = md5(ts + privateKey + publicKey);

app.get("/api/characters", (req, res) => {

   const url = `https://gateway.marvel.com/v1/public/characters?name=${req.query.name}&ts=${ts}&apikey=${publicKey}&hash=${hash}` 
      console.log("Root character endpoint hit");
   
fetch(url)
.then(response => {
   console.log(url)
   if(!response.ok) {
      console.log("ServerFetchTest: ", response.status);
      throw new Error("Character Network response was not ok");
   }
   console.log("response ok");
   return response.json()
})
.then(data =>{
   console.log("Data fetched from Marvel: ", data);
   res.status(201).json(data);
})
.catch(err=>{
   console.log("Error fetching character data SERVERSIDE:", err);
   res.status(500).json({error: err.message});
});
})



app.get("/api/entity", (req,res)=>{
   const offset = ""
   console.log("server query offset check:", offset); 

   console.log("Entity endpoint hit with uri: ", req.query.uri);

   const url = `${req.query.uri}?${offset}ts=${ts}&apikey=${publicKey}&hash=${hash}`

   console.log("Entity endpoint hit", url);
   fetch(url)
   .then(response=>{
      if(!response.ok){
         console.log("entity fetch !OK on server", response.status);
         const text = response.text();
         throw new Error(`Bad response: ${response.status}, body: ${text}`);
      }
      return response.json();
   })
   .then(data =>{
      console.log("Entity data fetched from Marvel: ", data);
      res.status(201).json(data);
   })
   .catch(err=>{
      console.log("Error fetching entity data SERVERSIDE:", err);
      res.status(500).json({error: err.message});
   })
})






app.listen(config.port, () => {
   console.log(`Server is running on port ${config.port}`);
});

app.use((err, req, res, next) => {
   console.error("Server Error: ",err);
   res.status(500).send("Something broke!");
});