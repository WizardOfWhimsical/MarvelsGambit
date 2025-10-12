# Marvel API Project

A dynamic web application that interfaces with the Marvel Comics API
to display rich character, comic, series, story, and event data from 
the Marvel Universe—featured through Gambit and other favorite characters.

## Table of Contents

Project Overview
Features
Tech Stack
Setup & Installation
Usage
Marvel API Details
Environment Variables
Attribution & Terms
Credits

## Project Overview

This project provides a responsive web interface to explore the Marvel universe using live data from the Marvel Comics API. The site highlights Gambit as a default character and allows users to view comics, series, stories, events, and more, all dynamically populated through JavaScript fetch requests.

## Features

Current features include loading Gambit on page load and his corresponding Series and Events.
Later hopes to add a search and display for Marvel characters, comics, series, stories, and events
Modular codebase with ES Modules, environment-based configuration, and clean project structure
Dynamic content population without page reloads
Image display with variant handling (portrait, standard, landscape, etc.)
Attribution and Marvel-compliant linking

## Tech Stack

Frontend: HTML, CSS, JavaScript (ES Modules)
Backend: Node.js, Express
APIs: Marvel Comics API
Other: dotenv for environment variables, md5 for request signing
```
  node  --env-file-if-exists=.env --watch server.js <--to replace nodemon and dotenv
```
# Setup & Installation

Clone the repository:
```
git clone https://github.com/YourUsername/marvel-api-project.git
cd marvel-api-project
```

Install dependencies:
```
npm install
```

Set up your environment variables:

Copy .env.example to .env and add your Marvel public and private API keys:
```
PUBLIC_KEY=yourPublicKey
PRIVATE_KEY=yourPrivateKey
```

Start the server:
```
npm start
```

Open the app:

Visit http://localhost:PORT in your browser.

## Usage

The landing page displays Gambit's info by default.

Use the navigation bar to explore series, events.

Click any item to view detailed information and images.

All data is fetched live from the Marvel API.

# Marvel API Details

API Endpoint: https://gateway.marvel.com/v1/public/

### Authentication:

All requests require apikey, ts (timestamp), and hash (md5 of ts + privateKey + publicKey) parameters.

## Marvel API Authentication Docs

Entity Types:
Characters, Comics, Series, Stories, Events, Creators

Result Structure:
All responses follow a common structure:
```
{
  "code": 200,
  "status": "Ok",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 30920,
    "count": 20,
    "results": [ ... ]
  }
}
```

## Image Handling:
Images are built using a base path, variant (e.g. portrait_xlarge), and extension (e.g. .jpg). See Image Guide
 for details.

## Environment Variables
```
Variable        | Purpose
PUBLIC_KEY      | Marvel API public key
PRIVATE_KEY 	| Marvel API private key
PORT 	        | Port for local server (optional)
```
# Attribution & Terms

### Attribution:
"Data provided by Marvel. © 2014 Marvel"
This must appear on every page displaying Marvel data.

### Linking:
If you display info beyond a title and thumbnail, you must link back to the corresponding Marvel.com URL provided in each API result.

### Rate Limits:
Most users are limited to 3000 API calls/day. Cache API results where appropriate.

## Terms of Use:

This app is for educational/non-commercial purposes only.
No monetization, no advertising, no in-app purchases per Marvel API Terms of Use
*Do not expose your private API key in client-side code or public repos.*

## Credits

1) Built by Stephen Lewis of Lewis Labs
2) Thank you to both my mentors: 
    1) Josiah Cornelius  
    2) EJ Mason 

Powered by the Marvel Comics API

Questions or feedback?
Feel free to email me!
st.rayis1085@yahoo.com

