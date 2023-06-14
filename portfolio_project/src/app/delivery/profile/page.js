import React from "react";
import styles from "./page.module.css";

const Profile = ({ driver }) => {
  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={syles.title}>
            <h3>Account Profile</h3>
          </div>
          <div className={styles.form}>
            <form action="">
              <input type="text" placeholder="email" />
              <input type="text" placeholder="phone" />
              <input type="text" placeholder="password" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


export async function getServerSideProps() {
  const { data } = await axios.get(
    "http://localhost:3000/api/delivery/profile"
  );

  return {
    props: {
      driver: data,
    },
  };
}
