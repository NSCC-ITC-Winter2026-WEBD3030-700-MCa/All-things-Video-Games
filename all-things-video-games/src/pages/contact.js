
import React from 'react';
import Link from '@docusaurus/Link';

export default function Contact() {
  return (
    <main style={{ 
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
     <div style={{ marginBottom: '1rem' }}>
        <Link to="/">&larr; Back to Home</Link>
     </div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or suggestions, please reach out to us!</p>
      <form style={{ maxWidth: 400, width: '100%' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea id="message" name="message" rows={4} style={{ width: '100%' }} />
        </div>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
