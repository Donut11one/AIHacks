# 🔧 Troubleshooting API Error 400

## ❌ Error: API Error: 400

This error means Groq API rejected the request. Here's how to fix it:

---

## ✅ Solution Checklist

### 1️⃣ Check if `.env` File Exists

**Location:** `frontend/.env` (NOT `frontend/src/.env`)

Open PowerShell in the `frontend` folder and check:
```powershell
Test-Path .env
```

If it says `False`, create the file:
```powershell
New-Item .env -ItemType File
```

---

### 2️⃣ Verify `.env` File Content

Open `frontend/.env` and make sure it contains:

```
VITE_GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxx
```

**Important:**
- ✅ File must be named `.env` (with the dot)
- ✅ Key must start with `gsk_`
- ✅ No spaces around the `=`
- ✅ No quotes around the value
- ✅ File must be in `frontend/` folder

---

### 3️⃣ Get Valid API Key

1. Go to: **https://console.groq.com/keys**
2. Sign up or log in
3. Click **"Create API Key"**
4. Copy the key (starts with `gsk_`)
5. Paste into `.env` file

Example:
```
VITE_GROQ_API_KEY=gsk_abcdefghijklmnopqrstuvwxyz123456789
```

---

### 4️⃣ Restart Dev Server

**IMPORTANT:** You MUST restart after creating/editing `.env`

```powershell
# Stop the server (Ctrl+C in terminal)

# Start it again
npm run dev
```

---

### 5️⃣ Clear Browser Cache

Sometimes the old config gets cached:

1. Press `F12` to open DevTools
2. Right-click the refresh button
3. Select **"Empty Cache and Hard Reload"**

Or just press `Ctrl + Shift + R`

---

## 🔍 Verify API Key is Loading

Add this temporarily to check if the key is loading:

Open browser console (F12) and type:
```javascript
console.log(import.meta.env.VITE_GROQ_API_KEY)
```

**Expected:** Should show your API key starting with `gsk_`  
**Problem:** Shows `undefined` → .env file not found or dev server not restarted

---

## 📋 Common Mistakes

| ❌ Wrong | ✅ Correct |
|---------|-----------|
| `GROQ_API_KEY=...` | `VITE_GROQ_API_KEY=...` |
| `.env` in `src/` folder | `.env` in `frontend/` folder |
| `VITE_GROQ_API_KEY="gsk_..."` | `VITE_GROQ_API_KEY=gsk_...` (no quotes) |
| Didn't restart server | Restart after editing .env |
| API key from wrong service | Must be from Groq (starts with gsk_) |

---

## 🧪 Test Your Setup

### Method 1: Check Console

1. Open app in browser
2. Press `F12` (DevTools)
3. Go to **Console** tab
4. Try classifying an email
5. Look for detailed error message

### Method 2: Manual API Test

Open PowerShell and test API key directly:

```powershell
$apiKey = "your_key_here"
$body = @{
    model = "llama-3.1-70b-versatile"
    messages = @(
        @{
            role = "user"
            content = "Hello"
        }
    )
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.groq.com/openai/v1/chat/completions" `
    -Method Post `
    -Headers @{
        "Content-Type" = "application/json"
        "Authorization" = "Bearer $apiKey"
    } `
    -Body $body
```

If this works, your key is valid!

---

## 🎯 Step-by-Step Fix

Run these commands in order:

```powershell
# 1. Navigate to frontend
cd frontend

# 2. Check if .env exists
Get-Content .env

# 3. If file doesn't exist, create it
"VITE_GROQ_API_KEY=paste_your_key_here" | Out-File -FilePath .env -Encoding utf8

# 4. Verify it was created
Get-Content .env

# 5. Stop dev server (Ctrl+C)

# 6. Clear node cache (optional)
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue

# 7. Restart dev server
npm run dev
```

---

## 🆘 Still Not Working?

### Check API Key Format

Valid Groq API key format:
- Starts with `gsk_`
- About 50-60 characters long
- Only letters and numbers

### Check Groq Service Status

Visit: https://status.groq.com

### Check API Quota

Log into Groq console and check if you have API calls remaining.

### Enable Verbose Errors

The updated code now shows detailed error messages. Try again and copy the full error.

---

## 📞 Get More Help

If still stuck, share these details:

1. **Error message:** (from browser console, F12)
2. **API key format:** First 10 chars (e.g., `gsk_abc123...`)
3. **File check:** Result of `Get-Content frontend/.env`
4. **Dev server output:** Any errors when starting

---

## ✅ Success Indicators

When everything works:
- ✅ No error in browser console
- ✅ "Classifying..." appears when you click
- ✅ Email moves to folder
- ✅ Classification reason shows

---

## 🎉 Quick Test

Once fixed, test with this email:

```
Subject: URGENT: Server is down
```

Should classify to: **Very Important** folder

---

**Need the key again?** → https://console.groq.com/keys

