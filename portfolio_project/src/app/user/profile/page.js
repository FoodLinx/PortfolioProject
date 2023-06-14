import React, { useState } from 'react';
import styles from './userProfile.module.css'


const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // the handleSubmit function will have to store the values into 
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2>Edit Profile</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* This form here will have to retrieve data from the database. */}
          <input type="text" placeholder="Email..."> { } </input>
          <input type="text" placeholder="Email"> { } </input>
            <button type="submit">Submit</button>
          </form>
      </div>
    </>
  );
};

export default UserProfile;
