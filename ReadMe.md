# 🎮 MarvelsGambit - Marvel Character Info App

A Node.js/Express web application that fetches character data from the Marvel API and displays navigation for Series, Events, and Stories.

**Built for:** Code to Dream - Open API Assignment  
**Status:** ✅ All bugs fixed and production-ready!

---

## 🚀 Features

- Fetch character data from Marvel API (currently: Gambit)
- Display navigation links for Series, Events, Stories
- Secure API key handling via backend proxy
- Full error handling and user feedback
- Loading states and error messages

---

## 📋 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/StrayDogSyn/MarvelsGambit.git
cd MarvelsGambit
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Get your Marvel API keys:

   - Go to [Marvel Developer Portal](https://developer.marvel.com/account)
   - Sign up or log in
   - Copy your Public Key and Private Key

3. Add your keys to `.env`:

   ```env
   PUBLIC_KEY=your_marvel_public_key_here
   PRIVATE_KEY=your_marvel_private_key_here
   ```

### 4. Start the server

```bash
npm start
```

### 5. Open in browser

Navigate to `http://localhost:3000`

---

## 🧪 Testing

See [TESTING_GUIDE.md](./TESTING_GUIDE.md) for comprehensive testing instructions.

**Quick test:**

1. Start the server
2. Click the button "Click here to get console results"
3. You should see 3 navigation elements appear (Series, Events, Stories)

---

## 🐛 Bug Fixes

This project had 6 bugs that were identified and fixed:

1. ✅ **Timestamp generated once at startup** - Fixed by generating fresh timestamp per request
2. ✅ **No backend error handling** - Added try-catch with validation
3. ✅ **Missing environment variable validation** - Server exits gracefully if keys missing
4. ✅ **No frontend error handling** - Added response validation and user feedback
5. ✅ **Constructor crashes on invalid data** - Added data validation before use
6. ✅ **Filename typo** - Renamed `characterEntityNavigation.js` → `characterEntityNavigation.js`

See [BUGS_FIXED.md](./BUGS_FIXED.md) for detailed breakdown of all fixes.

---

## 🚀 Deployment

This app requires a Node.js server to run, so it cannot be deployed to GitHub Pages (static hosting only).

**Recommended platforms:**

- **Render** (easiest, free tier)
- **Railway** (simple, free tier)
- **Vercel** (with serverless functions)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for step-by-step deployment instructions.

---

## 📁 Project Structure

```text
MarvelsGambit/
├── server.js                    # Express backend (Marvel API proxy)
├── config.js                    # Port configuration
├── package.json                 # Dependencies & scripts
├── .env.example                 # Environment variable template
├── root/
│   ├── index.html              # Main page
│   ├── css/                    # Stylesheets
│   └── js/
│       ├── main.js             # Frontend logic (button click, fetch)
│       └── classes/
│           └── characterEntityNavigation.js  # Navigation class
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** Vanilla JavaScript
- **API:** Marvel API
- **Authentication:** MD5 hash (timestamp + private + public keys)

---

## 📚 Documentation

- [BUGS_FIXED.md](./BUGS_FIXED.md) - Detailed bug analysis and fixes
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - How to deploy to production
- [TESTING_GUIDE.md](./TESTING_GUIDE.md) - Complete testing procedures

---

## 🎓 Learning Outcomes

This project demonstrates:

- REST API integration with authentication
- Backend proxy pattern for API key security
- Error handling (frontend + backend)
- Data validation and defensive programming
- Async/await patterns in JavaScript
- Express.js server setup
- Environment variable management

---

## 📝 Assignment Requirements

Original assignment requirements:

- ✅ Create repository
- ✅ Build basic HTML/CSS/JS structure
- ✅ Implement API fetch
- ✅ Console.log API response
- ✅ Link project in portfolio README

**Bonus completed:**

- ✅ Full error handling
- ✅ User feedback/loading states
- ✅ Data validation
- ✅ Production-ready code

---

## 🔗 Links

- **Repository:** [GitHub - MarvelsGambit](https://github.com/StrayDogSyn/MarvelsGambit)
- **Marvel API Docs:** [developer.marvel.com](https://developer.marvel.com/documentation/getting_started)

---

## 👨‍💻 Author

Built by EHunt for Code to Dream class

---

## 📄 License

This project is for educational purposes as part of the Code to Dream program.

---

## 🆘 Need Help?

Common issues:

- **"Missing API keys"** → Make sure `.env` file exists with valid keys
- **"401 Unauthorized"** → Check your Marvel API keys are correct
- **"Module not found"** → Run `npm install`
- **CORS errors** → Make sure you're using `http://localhost:3000`, not `file://`

See [TESTING_GUIDE.md](./TESTING_GUIDE.md) for more troubleshooting.
