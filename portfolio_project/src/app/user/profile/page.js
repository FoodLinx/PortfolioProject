"use client"


import React, { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    axios.get('https://api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Account</h1>
      </div>
      <div className={styles.content}>
        {userData ? (
          <div className={styles.profile}>
            <img
              src={userData.profilePicture}
              alt="Profile"
              className={styles.profilePicture}
            />
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name:</label>
                <input
                  type="text"
                  value={userData.name}
                  className={styles.input}
                  disabled
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number:</label>
                <input
                  type="tel"
                  value={userData.phoneNumber}
                  className={styles.input}
                  disabled
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email:</label>
                <input
                  type="email"
                  value={userData.email}
                  className={styles.input}
                  disabled
                />
              </div>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
