# 🎯 START HERE - AI Email Classifier

## ✨ What I Just Built For You

A **modern AI-powered email classification system** that automatically sorts emails into 4 smart folders using Groq's LLaMA 3.3 70B AI.

---

## 🚀 3 Steps to Get Started

### Step 1️⃣: Get Your FREE Groq API Key

1. Go to: **https://console.groq.com/keys**
2. Sign up (it's free!)
3. Click "Create API Key"
4. Copy the key (starts with `gsk_...`)

### Step 2️⃣: Create `.env` File

In the `frontend` folder, create a file named `.env` with this content:

```
VITE_GROQ_API_KEY=paste_your_key_here
```

**Important:** Replace `paste_your_key_here` with your actual API key!

### Step 3️⃣: Run the App

Open PowerShell in the `frontend` folder and run:

```powershell
# If you get execution policy error, run this first:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Install dependencies (if not done)
npm install

# Start the app
npm run dev
```

The app will open at `http://localhost:3000` 🎉

---

## 🎮 How to Use

1. **Type an email subject** (and optionally body text)
2. **Click "Classify Email"** (or press `Ctrl + Enter`)
3. **Watch the AI magic** ✨
4. Email automatically moves to the right folder!

---

## 📂 The 4 Smart Folders

| Folder | For | Example |
|--------|-----|---------|
| 👥 **Clients** | Customer emails | "Meeting with ABC Corp" |
| 📦 **Purchase Orders** | Invoices, orders | "PO-2024-156 Office supplies" |
| 💼 **Internal Coms** | Team messages | "Team lunch Friday" |
| ⭐ **Very Important** | Urgent matters | "URGENT: Server down" |

---

## ✅ Test Examples

Copy and paste these to test:

```
Subject: Need pricing for enterprise plan
→ Should go to: Clients

Subject: Invoice #2024-789 - Office Equipment  
→ Should go to: Purchase Orders

Subject: Weekly team standup moved to 3pm
→ Should go to: Internal Coms

Subject: CRITICAL: Payment system offline
→ Should go to: Very Important
```

---

## 📁 Project Files

```
frontend/
├── src/
│   ├── components/
│   │   ├── EmailClassifier.jsx     ← Main app logic
│   │   └── EmailClassifier.css     ← Styling
│   ├── App.jsx                     ← App container
│   ├── index.css                   ← Global dark theme
│   └── main.jsx                    ← Entry point
├── .env                            ← YOU CREATE THIS (API key)
├── package.json                    ← Dependencies
├── README.md                       ← Full documentation
├── SETUP-GUIDE.md                 ← Quick setup
└── PROJECT-INFO.md                ← Technical details
```

---

## 🎨 Features You Get

✅ Real-time AI classification  
✅ 4 color-coded folders  
✅ Visual email organization  
✅ Classification reasoning shown  
✅ Keyboard shortcuts  
✅ Dark modern theme  
✅ Smooth animations  
✅ Responsive design  

---

## ❓ Troubleshooting

### "Failed to classify email"
- ✔️ Check API key in `.env` file
- ✔️ Make sure file is named `.env` (with the dot)
- ✔️ Restart dev server after creating `.env`

### PowerShell won't run npm?
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### Can't find `.env` file?
- It should be in the `frontend` folder (not `src`)
- Make sure it starts with a dot: `.env`
- Windows might hide it - enable "Show hidden files"

---

## 🎯 Next Steps

Once it's running:

1. **Try the test emails** above
2. **Add your own emails** to classify
3. **Watch folders fill up** as you classify
4. **See AI reasoning** for each classification

---

## 📚 More Info

- **SETUP-GUIDE.md** - Detailed setup instructions
- **README.md** - Full documentation
- **PROJECT-INFO.md** - Technical architecture

---

## 🆘 Need Help?

1. Make sure `.env` file exists with your API key
2. Check that `npm install` completed successfully
3. Look for errors in the terminal
4. Check browser console (F12) for errors

---

## 🎉 You're Ready!

Run `npm run dev` and start classifying emails! 

The AI will automatically sort them into the right folders based on their content. Pretty cool, right? 😎

---

**Built with:** React + Vite + Groq AI + ❤️

