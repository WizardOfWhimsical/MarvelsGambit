import config from "#config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.get("/test", (req, res) => {
   //will build routes based off char, comics, series, stories, events
   const ts = new Date().getTime();
   const publicKey = process.env.PUBLIC_KEY;
   const privateKey = process.env.PRIVATE_KEY;
   const hash = md5(ts + privateKey + publicKey)
   console.log("Root endpoint hit");
fetch(`https://gateway.marvel.com/v1/public/characters?name=Gambit&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
.then(response => {response.json()})
.then(data =>{} )
});

app.listen(config.port, () => {
   console.log(`Server is running on port ${config.port}`);
});

app.use((err, req, res, next) => {
   console.error("Server Error: ",err);
   res.status(500).send("Something broke!");
});