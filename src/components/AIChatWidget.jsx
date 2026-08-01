import React, { useState } from 'react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="ai-chat-modal">
          <div className="ai-chat-modal-header">
            <strong>🤖 AI Sales Assistant</strong>
            <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close">
              &times;
            </button>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '0.5rem' }}>
            Hello! How can I assist you with your marketing goals today?
          </p>
          <div
            style={{
              padding: '0.5rem',
              backgroundColor: '#f1f5f9',
              borderRadius: '4px',
              fontSize: '0.8rem',
              color: '#94a3b8',
              textAlign: 'center'
            }}
          >
            [AI Chat Widget — UI Placeholder]
          </div>
        </div>
      )}

      <button
        className="ai-chat-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Chat Widget"
      >
        💬 AI Assistant
      </button>
    </>
  );
}
