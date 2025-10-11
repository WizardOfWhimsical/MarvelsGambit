# 🧪 Testing Guide - MarvelsGambit

## Quick Test After Bug Fixes

Follow these steps to verify all fixes are working correctly.

---

## ✅ Test 1: Environment Variables Validation

**What we're testing:** Server exits gracefully if API keys are missing

### Test Steps

1. Temporarily rename your `.env` file:

   ```bash
   mv .env .env.backup
   ```

2. Try to start the server:

   ```bash
   npm start
   ```

3. **Expected Result:**

   ```text
   ❌ ERROR: Missing API keys in .env file
   Please ensure PUBLIC_KEY and PRIVATE_KEY are set
   ```

4. Restore your `.env` file:

   ```bash
   mv .env.backup .env
   ```

**✅ PASS:** Server exits with clear error message  
**❌ FAIL:** Server starts anyway or crashes with cryptic error

---

## ✅ Test 2: Fresh Timestamp Generation

**What we're testing:** Timestamp is regenerated for each request

### Verification Steps

1. Start the server:

   ```bash
   npm start
   ```

2. Open `http://localhost:3000`

3. Click the button → Should work ✅

4. **Wait 10 minutes** (seriously, go get coffee ☕)

5. Click the button again → Should still work ✅

**✅ PASS:** Works even after waiting  
**❌ FAIL:** Second click fails with 401 error

---

## ✅ Test 3: Backend Error Handling

**What we're testing:** Server doesn't crash on errors

### Test Procedure

1. Edit `server.js` temporarily - change character name to invalid:

   ```javascript
   const url = `...characters?name=INVALIDCHARACTER123...`;
   ```

2. Start server and click button

3. **Expected Result:**
   - Server logs: "Character not found"
   - Frontend shows: "❌ Error Loading Character" message
   - Button says: "❌ Error - Try Again"
   - Server **does NOT crash**

4. Change name back to "Gambit"

**✅ PASS:** Error handled gracefully, server stays running  
**❌ FAIL:** Server crashes or hangs

---

## ✅ Test 4: Frontend Loading States

**What we're testing:** User sees feedback during fetch

### Interaction Steps

1. Start server normally

2. Open browser DevTools (F12) → Network tab → Throttle to "Slow 3G"

3. Click button

4. **Watch the button text change:**
   - Before click: "Click here to get console results"
   - After click: "Loading..." (button disabled)
   - After success: "✅ Character Loaded!"
   - After 2 seconds: Back to original text

**✅ PASS:** All state changes visible  
**❌ FAIL:** Button stays same or no loading feedback

---

## ✅ Test 5: Frontend Error Display

**What we're testing:** Errors shown to user, not just console

### Testing Steps

1. Start server

2. Open page, click button → Should work

3. **Stop the server** (Ctrl+C in terminal)

4. Click button again

5. **Expected Result:**
   - Red error box appears in the nav area
   - Message says: "Error Loading Character"
   - Shows actual error message
   - Has "🔄 Try Again" button

**✅ PASS:** Error displayed in UI with retry button  
**❌ FAIL:** Nothing happens or only console.log

---

## ✅ Test 6: Constructor Validation

**What we're testing:** Constructor validates data before using it

### Validation Steps

1. Edit `main.js` temporarily - pass invalid data to constructor:

   ```javascript
   // After fetch, replace:
   const entityNavigation = new CharacterEntityNavigation({}); // Empty object
   ```

2. Start server, click button

3. **Expected Result:**
   - Console shows: "Invalid data passed to constructor"
   - Error message: "Invalid character data: missing results array"
   - Error box appears in UI

4. Undo the change to `main.js`

**✅ PASS:** Constructor throws descriptive error  
**❌ FAIL:** Crashes with "Cannot read property of undefined"

---

## ✅ Test 7: Navigation Display

**What we're testing:** Navigation elements appear correctly

### Display Verification Steps

1. Start server normally

2. Click button

3. **Check that 3 navigation elements appear:**
   - Events
   - Series
   - Stories

4. Open DevTools → Elements tab → Inspect the `<nav>` container

5. **Verify each element has:**

   ```html
   <div data-url="https://gateway.marvel.com/v1/public/characters/1009313/events">Events</div>
   <div data-url="https://gateway.marvel.com/v1/public/characters/1009313/series">Series</div>
   <div data-url="https://gateway.marvel.com/v1/public/characters/1009313/stories">Stories</div>
   ```

6. Click on each navigation element

7. **Expected Result:**
   - Console logs: "Clicked on: [URL]"

**✅ PASS:** All 3 elements appear with correct URLs  
**❌ FAIL:** Missing elements or wrong URLs

---

## ✅ Test 8: Console Logging

**What we're testing:** Helpful logs for debugging

### Console Check Steps

1. Open DevTools → Console tab

2. Start server and click button

3. **Check for these logs in order:**

   **Backend (Terminal):**

   ```text
   Root endpoint hit
   Fetching from Marvel API...
   Response ok, parsing JSON...
   ✅ Data fetched from Marvel successfully
   ```

   **Frontend (Browser Console):**

   ```text
   Button was clicked!
   ✅ Data received from server: {data: ...}
   ✅ CharacterEntityNavigation initialized successfully
   ```

**✅ PASS:** All expected logs appear  
**❌ FAIL:** Missing logs or error messages

---

## ✅ Test 9: File Rename Verification

**What we're testing:** Filename typo is fixed

### File Verification Steps

1. Check that file exists:

   ```bash
   ls root/js/classes/characterEntityNavigation.js
   ```

2. Check that old file doesn't exist:

   ```bash
   ls root/js/classes/characterEntityNavigation.js  # Should fail
   ```

3. Check `index.html` has correct script tag:

   ```html
   <script src="./js/classes/characterEntityNavigation.js"></script>
   ```

**✅ PASS:** File renamed, HTML updated  
**❌ FAIL:** Old filename still exists

---

## ✅ Test 10: Full Integration Test

**What we're testing:** Everything works together end-to-end

### Integration Test Steps

1. **Fresh start:**

   ```bash
   # Make sure .env file has valid API keys
   npm start
   ```

2. Open browser to `http://localhost:3000`

3. **Complete workflow:**
   - Click button
   - See "Loading..." state
   - See "✅ Character Loaded!" message
   - See 3 navigation elements appear
   - Click on "Series" → See URL logged
   - Click on "Events" → See URL logged
   - Click on "Stories" → See URL logged

4. **Wait 5 minutes**, then click button again → Should still work

5. **Refresh page**, click button → Should work

**✅ PASS:** All steps work without errors  
**❌ FAIL:** Any step fails or throws error

---

## 📊 Test Results Summary

After running all tests, fill this out:

| Test | Status | Notes |
|------|--------|-------|
| 1. Env validation | ⬜ | |
| 2. Fresh timestamp | ⬜ | |
| 3. Backend errors | ⬜ | |
| 4. Loading states | ⬜ | |
| 5. Error display | ⬜ | |
| 6. Constructor validation | ⬜ | |
| 7. Navigation display | ⬜ | |
| 8. Console logging | ⬜ | |
| 9. File rename | ⬜ | |
| 10. Full integration | ⬜ | |

**All tests passing?** ✅ Ready to deploy!  
**Some tests failing?** ❌ Check the error logs and debug

---

## 🐛 Common Issues During Testing

### Issue: "fetch is not defined" in server.js

**Cause:** Using Node.js version < 18  
**Solution:** Upgrade Node.js or add:

```bash
npm install node-fetch
```

Then import in server.js:

```javascript
import fetch from 'node-fetch';
```

### Issue: CORS errors in browser console

**Cause:** Server CORS not configured  
**Solution:** Already fixed! CORS is enabled in server.js

### Issue: "Cannot find module '#config'"

**Cause:** Using older Node.js without import maps support  
**Solution:** Change in server.js:

```javascript
// From:
import config from "#config";
// To:
import config from "./config.js";
```

---

## 🎯 Quick Smoke Test (30 seconds)

If you're in a hurry, just run this:

1. `npm start`
2. Open `http://localhost:3000`
3. Click button
4. See 3 navigation elements?
   - ✅ YES → You're good to go!
   - ❌ NO → Run full tests above

---

## 📝 Testing Checklist for Assignment Submission

Before submitting to your instructor:

- [ ] All 10 tests pass
- [ ] No errors in browser console
- [ ] No errors in server terminal
- [ ] Navigation elements appear correctly
- [ ] Button shows loading states
- [ ] Error handling works (tested by stopping server)
- [ ] Code is properly formatted
- [ ] Files renamed correctly
- [ ] Console logs are helpful and clear
- [ ] App works after running for 10+ minutes

---

## 🎓 What Your Instructor Will Test

Expect your instructor to:

1. Clone your repo
2. Run `npm install`
3. Check for `.env.example` file (you might want to create one!)
4. Add their own Marvel API keys
5. Run `npm start`
6. Click button and verify navigation works
7. Check console logs for errors
8. Review your code for error handling

**Pro Tip:** Create a `.env.example` file:

```bash
PUBLIC_KEY=your_public_key_here
PRIVATE_KEY=your_private_key_here
```

And add a note in README.md:

```markdown
## Setup
1. Copy `.env.example` to `.env`
2. Add your Marvel API keys
3. Run `npm install`
4. Run `npm start`
5. Open http://localhost:3000
```

---

## ✅ You're Ready

If all tests pass, your app is:

- ✅ Bug-free
- ✅ Production-ready
- ✅ User-friendly
- ✅ Properly error-handled
- ✅ Ready to impress your instructor

Great work! 🚀
