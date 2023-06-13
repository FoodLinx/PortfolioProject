"use client"

import React, { useState } from 'react';
import styles from './profile.module.scss';
import burger from '@/public/Burgers/burger.jpg';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save the updated details to the database
    console.log('Updated details:', { name, phoneNumber, password, email });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Account</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.profile}>
          <img
            src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=740&t=st=1686671908~exp=1686672508~hmac=51468aa0347e01065d4895729c027d3eb00d42a055aac42a4650f221aa74be38"
            alt="Profile"
            className={styles.profilePicture}
          />
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name:</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submitButton}>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
