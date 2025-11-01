# 📧 AI Email Classifier - Project Information

## 🎯 What This App Does

This is an **AI-powered email classification system** that automatically sorts emails into 4 different folders based on their content using Groq's LLaMA AI model.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── EmailClassifier.jsx    # Main component with all logic
│   │   └── EmailClassifier.css    # Styling for classifier
│   ├── App.jsx                    # App wrapper
│   ├── App.css                    # App styles
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles (dark theme)
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
├── README.md                      # Full documentation
├── SETUP-GUIDE.md                # Quick setup guide
└── .env                          # API key (YOU NEED TO CREATE THIS)
```

## 🎨 The 4 Folders

| Folder | Icon | Color | Purpose |
|--------|------|-------|---------|
| **Clients** | 👥 | Blue | Customer emails, client meetings, sales |
| **Purchase Orders** | 📦 | Green | Invoices, procurement, vendor orders |
| **Internal Coms** | 💼 | Orange | Team updates, internal announcements |
| **Very Important** | ⭐ | Red | Urgent matters, critical deadlines |

## 🔧 How It Works

1. **User enters email** (subject + optional body)
2. **Click "Classify"** (or press Ctrl+Enter)
3. **AI analyzes** the content using Groq API
4. **Email is moved** to appropriate folder
5. **Reason shown** explaining why it was classified

## 🚀 To Run This App

### Quick Start:
```bash
# 1. Create .env file with your Groq API key
echo "VITE_GROQ_API_KEY=your_key_here" > .env

# 2. Install (if not done)
npm install

# 3. Run
npm run dev
```

### Get API Key:
→ Visit: https://console.groq.com/keys

## 💡 Features

✅ Real-time AI classification  
✅ Visual folder organization  
✅ Classification reasoning shown  
✅ Email history in each folder  
✅ Keyboard shortcuts (Ctrl+Enter)  
✅ Responsive design  
✅ Dark theme UI  
✅ Smooth animations  

## 🎮 Try These Example Emails

**For Clients Folder:**
```
Subject: Question about our partnership opportunities
```

**For Purchase Orders:**
```
Subject: PO-2024-555 Office supplies delivery
```

**For Internal Coms:**
```
Subject: All hands meeting tomorrow at 2pm
```

**For Very Important:**
```
Subject: URGENT: Security breach detected
```

## 🔑 Key Files to Understand

### `EmailClassifier.jsx` (Main Component)
- Handles form input (subject + body)
- Makes API call to Groq
- Parses AI response
- Manages email state for each folder
- Displays folders and emails

### `EmailClassifier.css` (Styling)
- Dark theme colors
- Grid layout for folders
- Card designs
- Animations and transitions
- Responsive breakpoints

### `.env` (Configuration) - **YOU MUST CREATE THIS**
```
VITE_GROQ_API_KEY=gsk_...your_key_here...
```

## 🌐 API Integration

**Endpoint:** `https://api.groq.com/openai/v1/chat/completions`  
**Model:** `llama-3.1-70b-versatile`  
**Temperature:** 0.3 (focused, consistent)  
**Max Tokens:** 150  

The AI returns:
```
FOLDER: folder_name
REASON: Brief explanation
```

## 🎨 Design System

### Colors (from index.css)
- Primary: `#6366f1` (Indigo)
- Secondary: `#a855f7` (Purple)
- Background: `#0f172a` (Dark slate)
- Surface: `#1e293b` (Slate)
- Success: `#10b981` (Green)

### Folder Colors
- Clients: `#6366f1` (Blue)
- Purchase Orders: `#10b981` (Green)
- Internal Coms: `#f59e0b` (Orange)
- Very Important: `#ef4444` (Red)

## 📊 State Management

The app uses React's `useState` to manage:
- `subject` - Email subject input
- `body` - Email body input
- `isClassifying` - Loading state
- `classificationResult` - AI response
- `emails` - Object with 4 arrays (one per folder)
- `error` - Error messages

## 🔐 Security Note

⚠️ **For Production:**
- Don't expose API keys in frontend
- Create a backend API proxy
- Implement rate limiting
- Add user authentication

Current setup is for **demo/development** purposes.

## 🚀 Deployment Options

### Vercel
```bash
npm run build
# Deploy dist/ folder
# Add VITE_GROQ_API_KEY in Vercel env vars
```

### Netlify
Same as Vercel - build and deploy with env vars.

## 📝 Customization Ideas

1. **Add more folders** - Edit `FOLDERS` array
2. **Change AI model** - Modify API request
3. **Add search** - Filter emails across folders
4. **Export emails** - Download as CSV/JSON
5. **Email templates** - Quick test examples
6. **Undo classification** - Move emails between folders
7. **Statistics** - Show classification accuracy
8. **Dark/Light theme toggle**

## 🐛 Known Limitations

- API key exposed in frontend (dev only)
- No email persistence (refreshing clears data)
- No real email integration (simulation only)
- Limited to 4 folders (easily expandable)

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Groq API Docs](https://console.groq.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Lucide Icons](https://lucide.dev)

## 🤝 Support

If you need help:
1. Check SETUP-GUIDE.md
2. Read README.md
3. Verify .env file exists
4. Check browser console for errors

---

**Ready to classify some emails?** 🚀  
Run `npm run dev` and start organizing!

