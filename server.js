import config from "#config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import md5 from "md5";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./root"));

const ts = new Date().getTime();
   const publicKey = process.env.PUBLIC_KEY;
   const privateKey = process.env.PRIVATE_KEY;
   const hash = md5(ts + privateKey + publicKey);

app.get("/test", (req, res) => {
   //will build routes based off char, comics, series, stories, events
   const url = `https://gateway.marvel.com/v1/public/characters?name=Gambit&ts=${ts}&apikey=${publicKey}&hash=${hash}` ////character by name Gambit
   
   // const url = `https://gateway.marvel.com/v1/public/characters/1009313/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`////series by characterId Gambit
      console.log("Root endpoint hit");
   
fetch(url)
.then(response => {
   console.log(url)
   if(!response.ok) {
      console.log("ServerFetchTest: ", response.status);
      throw new Error("Network response was not ok");
   }
   console.log("response ok");
   return response.json()
})
.then(data =>{
   console.log("Data fetched from Marvel: ", data);
   res.status(201).json(data);
} )
});

app.listen(config.port, () => {
   console.log(`Server is running on port ${config.port}`);
});

app.use((err, req, res, next) => {
   console.error("Server Error: ",err);
   res.status(500).send("Something broke!");
});