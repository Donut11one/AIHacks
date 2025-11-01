# 📧 AI Email Classifier

Intelligent email classification system powered by Groq LLM. Automatically categorizes emails into appropriate folders based on content.

## 🎯 Features

- **AI-Powered Classification** - Uses Groq's LLaMA 3.1 70B model for intelligent email sorting
- **4 Smart Folders**:
  - 👥 **Clients** - Customer inquiries and client communications
  - 📦 **Purchase Orders** - Invoices, procurement, vendor orders
  - 💼 **Internal Coms** - Team updates and internal communications
  - ⭐ **Very Important** - Urgent matters and critical deadlines
- **Real-time Classification** - Instant AI analysis and folder assignment
- **Visual Feedback** - See classification reason and email movement
- **Email History** - View all classified emails in organized folders
- **Modern UI** - Dark theme with smooth animations

## 🚀 Quick Start

### 1. Get Groq API Key

1. Go to [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Copy your API key

### 2. Configure Environment

Create a `.env` file in the `frontend` directory:

```bash
VITE_GROQ_API_KEY=your_groq_api_key_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 📖 How to Use

1. **Enter Email Details**
   - Type the email subject (required)
   - Optionally add email body for better classification

2. **Classify**
   - Click "Classify Email" button
   - Or press `Ctrl + Enter`

3. **Watch the Magic**
   - AI analyzes the content
   - Email is automatically moved to appropriate folder
   - See the classification reason

4. **View Organized Emails**
   - Check each folder to see classified emails
   - Hover over emails for details
   - Each folder shows email count

## 🔧 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Groq API** - LLM inference (LLaMA 3.1 70B)
- **Lucide React** - Icons
- **CSS3** - Modern styling

## 🎨 Folders Overview

### 👥 Clients (Blue)
- Customer inquiries
- Client meeting requests
- Customer support emails
- Sales communications

### 📦 Purchase Orders (Green)
- Purchase orders
- Invoices and billing
- Vendor communications
- Procurement requests

### 💼 Internal Coms (Orange)
- Team updates
- Internal announcements
- Staff meetings
- Company news

### ⭐ Very Important (Red)
- Urgent requests
- Executive communications
- Critical deadlines
- Emergency matters

## 🤖 AI Classification

The system uses Groq's LLaMA 3.1 70B model with:
- **Temperature**: 0.3 (for consistent, focused responses)
- **Max Tokens**: 150
- **Custom Prompt**: Trained to categorize based on business context

## 📝 Example Emails

Try these examples:

```
Subject: Meeting with Johnson Corp next week
→ Classified as: Clients

Subject: PO-2024-1543 - Office Supplies Order
→ Classified as: Purchase Orders

Subject: Team standup moved to 3pm today
→ Classified as: Internal Coms

Subject: URGENT: Server outage affecting production
→ Classified as: Very Important
```

## 🔒 Security

- API keys stored in environment variables
- Never commit `.env` file to version control
- API requests made client-side (for demo purposes)
- For production, use a backend proxy to protect API keys

## 🐛 Troubleshooting

### "Failed to classify email"
- Check your API key is correct in `.env`
- Ensure you're connected to the internet
- Verify Groq API service is running

### API Key Not Loading
- Make sure `.env` file is in `frontend/` directory
- Restart the dev server after creating `.env`
- Variable name must start with `VITE_`

### PowerShell Execution Error
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## 📊 API Usage

Each classification uses approximately:
- **Tokens**: ~100-150 tokens per request
- **Response Time**: 1-3 seconds
- **Model**: LLaMA 3.1 70B Versatile

Groq offers generous free tier limits. Check [pricing](https://groq.com/pricing) for details.

## 🎨 Customization

### Add More Folders

Edit `FOLDERS` array in `EmailClassifier.jsx`:

```javascript
const FOLDERS = [
  { id: 'your_folder', name: 'Your Folder', icon: '🎯', color: '#8b5cf6' },
  // ... existing folders
]
```

Update the AI prompt to include your new folder.

### Adjust Classification Logic

Modify the system prompt in the API call to fine-tune classification behavior.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Deploy to Vercel/Netlify

1. Connect your repository
2. Add `VITE_GROQ_API_KEY` to environment variables
3. Deploy

**Note**: For production, implement a backend API to protect your Groq API key.

## 📄 License

MIT

---

**Built with ❤️ using React, Vite & Groq**
