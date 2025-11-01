# 🚀 Quick Setup Guide

## Step 1: Get Your Groq API Key

1. Visit: https://console.groq.com/keys
2. Sign up or log in (it's free!)
3. Click "Create API Key"
4. Copy your key

## Step 2: Create Environment File

Create a new file named `.env` in the `frontend` folder with this content:

```
VITE_GROQ_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual Groq API key.

## Step 3: Install & Run

```bash
# Navigate to frontend folder
cd frontend

# Allow PowerShell scripts (if needed)
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Install dependencies
npm install

# Start the app
npm run dev
```

## Step 4: Test It Out

Try classifying these test emails:

### Test 1: Client Email
```
Subject: Need proposal for new marketing campaign
```
Expected: → Clients folder

### Test 2: Purchase Order
```
Subject: Invoice #2024-156 - Office Equipment
```
Expected: → Purchase Orders folder

### Test 3: Internal Communication
```
Subject: Team lunch this Friday at 12pm
```
Expected: → Internal Coms folder

### Test 4: Urgent
```
Subject: URGENT: Website is down - need immediate action
```
Expected: → Very Important folder

## 🎯 Features to Try

- Add email body for more accurate classification
- Use `Ctrl + Enter` to quickly classify
- Watch emails appear in the appropriate folders
- See AI's reasoning for each classification

## ⚠️ Common Issues

### API Key Not Working?
- Make sure file is named `.env` (with the dot)
- File must be in the `frontend` folder
- Restart dev server after creating `.env`

### Classification Fails?
- Check internet connection
- Verify API key is correct
- Check Groq service status

### PowerShell Error?
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## 📚 Next Steps

- Customize folder names in `EmailClassifier.jsx`
- Adjust AI classification prompt
- Add more folders for your use case
- Integrate with real email backend

Enjoy your AI-powered email organizer! 🎉

