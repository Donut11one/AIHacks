# 🤖 Groq Models Reference

## ✅ Currently Updated Model

The app now uses: **`llama-3.3-70b-versatile`**

This is the latest version replacing the deprecated `llama-3.1-70b-versatile`.

---

## 🔄 Alternative Models You Can Use

If you want to try different models, edit `EmailClassifier.jsx` line 50:

### Option 1: LLaMA 3.3 70B (Current - Recommended)
```javascript
model: 'llama-3.3-70b-versatile'
```
- **Best for:** Complex classification, high accuracy
- **Speed:** Moderate
- **Quality:** Excellent

### Option 2: LLaMA 3.1 8B Instant
```javascript
model: 'llama-3.1-8b-instant'
```
- **Best for:** Fast responses
- **Speed:** Very fast
- **Quality:** Good

### Option 3: Mixtral 8x7B
```javascript
model: 'mixtral-8x7b-32768'
```
- **Best for:** Balanced performance
- **Speed:** Fast
- **Quality:** Very good

### Option 4: Gemma 2 9B
```javascript
model: 'gemma2-9b-it'
```
- **Best for:** Efficient processing
- **Speed:** Fast
- **Quality:** Good

---

## 📊 Model Comparison

| Model | Speed | Accuracy | Best Use Case |
|-------|-------|----------|---------------|
| llama-3.3-70b-versatile | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Complex classification |
| llama-3.1-8b-instant | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Quick responses |
| mixtral-8x7b-32768 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Balanced |
| gemma2-9b-it | ⭐⭐⭐⭐ | ⭐⭐⭐ | Lightweight |

---

## 🔧 How to Change Model

1. Open `frontend/src/components/EmailClassifier.jsx`
2. Find line ~50:
   ```javascript
   model: 'llama-3.3-70b-versatile',
   ```
3. Replace with your chosen model
4. Save and refresh browser

---

## 📚 Check Latest Models

For the most up-to-date list of available models:

👉 **https://console.groq.com/docs/models**

---

## ⚠️ Deprecated Models

These models are **no longer available:**
- ❌ `llama-3.1-70b-versatile` (deprecated)
- ❌ `llama-3-70b-8192` (deprecated)
- ❌ `llama-3-8b-8192` (deprecated)

Always check the Groq console for deprecation notices.

---

## 💡 Tips

- **For production:** Use the 70B model for best accuracy
- **For testing:** Use the 8B instant model for faster iteration
- **For cost optimization:** Smaller models use fewer tokens
- **For complex tasks:** Stick with the 70B models

---

**Current Setup:** LLaMA 3.3 70B ✅

