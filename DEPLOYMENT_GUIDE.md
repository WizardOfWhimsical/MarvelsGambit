# 🚀 Deployment Guide for MarvelsGambit

## Why GitHub Pages Won't Work

**Your app needs a Node.js server to run.** GitHub Pages only hosts static files (HTML, CSS, JS) - it can't run server code.

**The Problem:**

- Your backend (`server.js`) needs to proxy Marvel API requests
- It needs to hide your API keys (security!)
- It needs to generate fresh authentication tokens
- GitHub Pages = Static only, no servers allowed

---

## ✅ Recommended: Deploy to Render (Free)

### Step 1: Prepare Your Repository

1. **Make sure your code is on GitHub** (already done ✅)

2. **Add a `.gitignore` file** (if not already there):

   ```env
   node_modules/
   .env
   .DS_Store
   ```

3. **Commit and push all changes:**

   ```bash
   git add .
   git commit -m "Fixed all bugs - ready for deployment"
   git push origin main
   ```

---

### Step 2: Sign Up for Render

1. Go to [render.com](https://render.com)
2. Click **"Get Started for Free"**
3. Sign up with your GitHub account
4. Authorize Render to access your repositories

---

### Step 3: Create a New Web Service

1. Click **"New +"** → **"Web Service"**
2. Connect your `MarvelsGambit` repository
3. Configure the service:

   **Basic Settings:**
   - Name: `marvels-gambit` (or whatever you want)
   - Region: Choose closest to you
   - Branch: `main`
   - Root Directory: Leave blank
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

   **Instance Type:**
   - Select **"Free"** plan

4. Click **"Advanced"** → **"Add Environment Variable"**

   Add these two variables:
   - Key: `PUBLIC_KEY` → Value: `your_marvel_public_key`
   - Key: `PRIVATE_KEY` → Value: `your_marvel_private_key`

5. Click **"Create Web Service"**

---

### Step 4: Wait for Deployment

- Render will build and deploy your app (takes 2-5 minutes)
- Watch the logs to see progress
- When you see "Server is running on port XXXX" → it's live! ✅

---

### Step 5: Test Your Deployed App

1. Render gives you a URL like: `https://marvels-gambit.onrender.com`
2. Open that URL in your browser
3. Click the button → Should work exactly like localhost!

---

## 🎯 Alternative: Deploy to Railway

Railway is another great free option:

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select `MarvelsGambit`
5. Add environment variables:
   - `PUBLIC_KEY`
   - `PRIVATE_KEY`
6. Deploy!

**URL:** Railway gives you a URL like `https://marvels-gambit-production.up.railway.app`

---

## 🎯 Alternative: Deploy to Vercel with Serverless Functions

Vercel is optimized for frontend but can run serverless functions:

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Restructure for Serverless

Create `api/test.js`:

```javascript
import md5 from 'md5';

export default async function handler(req, res) {
   const ts = new Date().getTime();
   const publicKey = process.env.PUBLIC_KEY;
   const privateKey = process.env.PRIVATE_KEY;
   const hash = md5(ts + privateKey + publicKey);
   
   const url = `https://gateway.marvel.com/v1/public/characters?name=Gambit&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
   
   try {
      const response = await fetch(url);
      if (!response.ok) {
         return res.status(response.status).json({ error: 'Marvel API error' });
      }
      const data = await response.json();
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
}
```

Create `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/test", "destination": "/api/test" },
    { "source": "/(.*)", "destination": "/root/$1" }
  ]
}
```

### Step 3: Deploy

```bash
vercel --prod
```

Add environment variables in Vercel dashboard.

---

## 🐛 Troubleshooting Deployment

### Issue: "Module not found"

**Solution:** Make sure `package.json` has all dependencies:

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "md5": "^2.3.0",
    "morgan": "^1.10.0"
  }
}
```

### Issue: "Port already in use"

**Solution:** Render/Railway automatically assign ports. Change `config.js`:

```javascript
export default {
  port: process.env.PORT || 3000  // Use Render's port
}
```

### Issue: "Environment variables not found"

**Solution:**

1. Double-check variables are added in platform dashboard
2. Restart the service
3. Check logs for "Missing API keys" error

### Issue: "Marvel API returns 401 Unauthorized"

**Solution:**

1. Verify API keys are correct
2. Check timestamp is being generated fresh (we fixed this!)
3. Make sure hash includes keys in correct order: `ts + private + public`

---

## 📊 Deployment Comparison

| Platform | Free Tier | Setup Difficulty | Best For |
|----------|-----------|------------------|----------|
| **Render** | ✅ Yes (750 hrs/mo) | ⭐⭐ Easy | Full stack apps |
| **Railway** | ✅ Yes ($5 credit) | ⭐⭐ Easy | Quick deployments |
| **Vercel** | ✅ Yes (unlimited) | ⭐⭐⭐ Medium | Frontend + Serverless |
| **Heroku** | ❌ No longer free | ⭐⭐ Easy | Legacy choice |
| **Fly.io** | ✅ Yes (limited) | ⭐⭐⭐⭐ Hard | Advanced users |

**Recommendation:** Start with **Render** - it's the easiest and most reliable for Node.js apps.

---

## ✅ Deployment Checklist

Before deploying, make sure:

- [x] All bugs are fixed (we did this!)
- [x] `.env` file is in `.gitignore` (don't commit API keys!)
- [x] `package.json` has all dependencies
- [x] `npm start` works locally
- [x] Environment variables are ready to add
- [x] Code is pushed to GitHub

After deploying:

- [ ] Add environment variables to platform
- [ ] Wait for build to complete
- [ ] Test the deployed URL
- [ ] Check logs if something breaks
- [ ] Share your live URL!

---

## 🎉 You're Ready to Deploy

All the bugs are fixed, error handling is in place, and your code is production-ready. Pick a platform and deploy! 🚀

**Pro Tip:** Deploy to Render first (easiest), then try others if you want to learn more platforms.

Good luck! 🎯
