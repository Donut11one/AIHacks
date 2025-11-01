import { useState } from 'react'
import { Mail, Send, Folder, Loader2, Sparkles } from 'lucide-react'
import './EmailClassifier.css'

const FOLDERS = [
  { id: 'clients', name: 'Clients', icon: '👥', color: '#6366f1' },
  { id: 'purchase_orders', name: 'Purchase Orders', icon: '📦', color: '#10b981' },
  { id: 'internal_coms', name: 'Internal Coms', icon: '💼', color: '#f59e0b' },
  { id: 'very_important', name: 'Very Important', icon: '⭐', color: '#ef4444' }
]

function EmailClassifier() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [isClassifying, setIsClassifying] = useState(false)
  const [classificationResult, setClassificationResult] = useState(null)
  const [emails, setEmails] = useState({
    clients: [],
    purchase_orders: [],
    internal_coms: [],
    very_important: []
  })
  const [error, setError] = useState(null)

  const classifyEmail = async () => {
    if (!subject.trim()) {
      setError('Please enter an email subject')
      return
    }

    setIsClassifying(true)
    setError(null)
    setClassificationResult(null)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are an intelligent email classifier. Analyze the email and classify it into one of these folders:
- clients: Emails from or about clients, customer inquiries, client meetings
- purchase_orders: Purchase orders, invoices, procurement, vendor orders
- internal_coms: Internal company communications, team updates, internal meetings
- very_important: Urgent matters, executive communications, critical deadlines

Respond with ONLY the folder name (one of: clients, purchase_orders, internal_coms, very_important) and a brief reason in this exact format:
FOLDER: folder_name
REASON: Brief explanation`
            },
            {
              role: 'user',
              content: `Subject: ${subject}\nBody: ${body || 'No body provided'}`
            }
          ],
          temperature: 0.3,
          max_tokens: 150
        })
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      const aiResponse = data.choices[0].message.content

      // Parse AI response
      const folderMatch = aiResponse.match(/FOLDER:\s*(\w+)/i)
      const reasonMatch = aiResponse.match(/REASON:\s*(.+)/i)

      const folder = folderMatch ? folderMatch[1].toLowerCase() : 'internal_coms'
      const reason = reasonMatch ? reasonMatch[1].trim() : 'Classified by AI'

      // Validate folder
      const validFolder = FOLDERS.find(f => f.id === folder) ? folder : 'internal_coms'

      setClassificationResult({
        folder: validFolder,
        reason: reason
      })

      // Add email to folder
      const newEmail = {
        id: Date.now(),
        subject,
        body,
        timestamp: new Date().toISOString(),
        reason
      }

      setEmails(prev => ({
        ...prev,
        [validFolder]: [newEmail, ...prev[validFolder]]
      }))

      // Clear form after successful classification
      setTimeout(() => {
        setSubject('')
        setBody('')
        setClassificationResult(null)
      }, 3000)

    } catch (err) {
      console.error('Classification error:', err)
      setError(err.message || 'Failed to classify email. Please check your API key.')
    } finally {
      setIsClassifying(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      classifyEmail()
    }
  }

  return (
    <div className="email-classifier">
      {/* Header */}
      <header className="classifier-header">
        <div className="header-content">
          <div className="header-title">
            <Mail size={32} />
            <div>
              <h1>AI Email Classifier</h1>
              <p>Powered by Groq LLM</p>
            </div>
          </div>
        </div>
      </header>

      <div className="classifier-container">
        {/* Email Input Section */}
        <div className="email-input-section">
          <div className="section-card">
            <div className="section-header">
              <h2>
                <Mail size={20} />
                New Email
              </h2>
              <p>Enter email details to classify</p>
            </div>

            <div className="email-form">
              <div className="form-group">
                <label htmlFor="subject">Subject Line</label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g., Urgent: Q4 Budget Approval Needed"
                  disabled={isClassifying}
                />
              </div>

              <div className="form-group">
                <label htmlFor="body">Email Body (Optional)</label>
                <textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter email content for better classification..."
                  rows="6"
                  disabled={isClassifying}
                />
              </div>

              <button
                className="classify-button"
                onClick={classifyEmail}
                disabled={isClassifying || !subject.trim()}
              >
                {isClassifying ? (
                  <>
                    <Loader2 size={20} className="spinning" />
                    Classifying...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Classify Email
                  </>
                )}
              </button>

              <p className="keyboard-hint">Press Ctrl + Enter to classify</p>

              {error && (
                <div className="error-message">
                  <strong>Error:</strong> {error}
                </div>
              )}

              {classificationResult && (
                <div className="classification-result">
                  <div className="result-header">
                    <Sparkles size={18} />
                    <strong>Classified!</strong>
                  </div>
                  <div className="result-content">
                    <div className="result-folder">
                      Moved to: <strong>{FOLDERS.find(f => f.id === classificationResult.folder)?.name}</strong>
                    </div>
                    <div className="result-reason">
                      {classificationResult.reason}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Folders Section */}
        <div className="folders-section">
          <div className="section-header">
            <h2>
              <Folder size={20} />
              Email Folders
            </h2>
            <p>Organized by AI</p>
          </div>

          <div className="folders-grid">
            {FOLDERS.map((folder) => (
              <div key={folder.id} className="folder-card">
                <div className="folder-header" style={{ borderTopColor: folder.color }}>
                  <div className="folder-title">
                    <span className="folder-icon">{folder.icon}</span>
                    <h3>{folder.name}</h3>
                  </div>
                  <div className="folder-count" style={{ backgroundColor: folder.color }}>
                    {emails[folder.id].length}
                  </div>
                </div>

                <div className="folder-emails">
                  {emails[folder.id].length === 0 ? (
                    <div className="empty-folder">
                      <Folder size={32} />
                      <p>No emails yet</p>
                    </div>
                  ) : (
                    emails[folder.id].map((email) => (
                      <div key={email.id} className="email-item">
                        <div className="email-subject">{email.subject}</div>
                        {email.body && (
                          <div className="email-body">{email.body.substring(0, 80)}...</div>
                        )}
                        <div className="email-meta">
                          <span className="email-time">
                            {new Date(email.timestamp).toLocaleTimeString()}
                          </span>
                          <span className="email-reason">{email.reason}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailClassifier

