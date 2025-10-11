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

// Validate environment variables on startup
const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

if (!publicKey || !privateKey) {
   console.error('❌ ERROR: Missing API keys in .env file');
   console.error('Please ensure PUBLIC_KEY and PRIVATE_KEY are set');
   process.exit(1);
}

app.get("/test", async (req, res) => {
   console.log("Root endpoint hit");
   
   // Generate FRESH timestamp and hash for EACH request
   const ts = new Date().getTime();
   const hash = md5(ts + privateKey + publicKey);
   
   //will build routes based off char, comics, series, stories, events
   const url = `https://gateway.marvel.com/v1/public/characters?name=Gambit&ts=${ts}&apikey=${publicKey}&hash=${hash}`; ////character by name Gambit
   
   // const url = `https://gateway.marvel.com/v1/public/characters/1009313/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`////series by characterId Gambit
   
   try {
      console.log("Fetching from Marvel API...");
      const response = await fetch(url);
      
      if (!response.ok) {
         console.error("Marvel API error:", response.status);
         return res.status(response.status).json({
            error: 'Marvel API request failed',
            status: response.status,
            message: `Failed to fetch character data (${response.status})`
         });
      }
      
      console.log("Response ok, parsing JSON...");
      const data = await response.json();
      
      // Validate Marvel's response structure
      if (!data?.data?.results) {
         console.error("Invalid Marvel API response structure:", data);
         return res.status(502).json({
            error: 'Invalid response from Marvel API',
            message: 'The API returned unexpected data format'
         });
      }
      
      // Check if character was found
      if (data.data.results.length === 0) {
         console.log("Character not found");
         return res.status(404).json({
            error: 'Character not found',
            query: 'Gambit',
            message: 'No character data returned from Marvel API'
         });
      }
      
      console.log("✅ Data fetched from Marvel successfully");
      res.status(200).json(data); // 200 for successful GET, not 201
      
   } catch (error) {
      console.error("❌ Server error:", error);
      res.status(500).json({
         error: 'Internal server error',
         message: error.message
      });
   }
});

app.listen(config.port, () => {
   console.log(`Server is running on port ${config.port}`);
});

app.use((err, req, res, next) => {
   console.error("Server Error: ",err);
   res.status(500).send("Something broke!");
});