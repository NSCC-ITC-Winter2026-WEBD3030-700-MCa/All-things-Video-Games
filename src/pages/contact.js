import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';

export default function Contact() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className="container">
        <h1 className="margin-top--xl">Contact Us</h1>
        <p>If you have any questions, feedback, or suggestions, please reach out to us!</p>
        <form style={{ maxWidth: 400 }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" id="name" name="name" style={{ width: '100%', border: '1px solid #888' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" style={{ width: '100%', border: '1px solid #888' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows={4} style={{ width: '100%', border: '1px solid #888' }} />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}
