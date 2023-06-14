"use client"

import React, { useState } from 'react';
import contact from './contact.module.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to send the email
    // You can integrate a backend service or use a library like nodemailer to send the email
    console.log('Email sent:', name, email, message);
    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={contact.container}>
      <div className={contact.greeting}>
        <h2 className={contact.heading} >Get in Touch</h2>
        <p className={contact.text} >
          We would love to hear from you! Whether you have a question, feedback,
          or simply want to say hello, fill out the form below and we'll get back
          to you as soon as possible.
        </p>
      </div>
      <div className={contact.formContainer}>
        <h2 className={contact.heading}>Contact Us</h2>
        <form className={contact.form} onSubmit={handleSubmit}>
          <div className={contact.formGroup}>
            <label className={contact.label} htmlFor="name">Name:</label>
            <input
              className={contact.input}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={contact.formGroup}>
            <label className={contact.label} htmlFor="email">Email:</label>
            <input
              className={contact.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={contact.formGroup}>
            <label className={contact.label} htmlFor="message">Message:</label>
            <textarea
              className={contact.textarea}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={contact.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;