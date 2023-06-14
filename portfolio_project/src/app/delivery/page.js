import React from "react";
import axios from "axios";
import { Footer } from "@/src/components/Footer/Footer";
import Head from "next/head";
import { Navbar } from "@/src/components/Navbar/Navbar";
import DeliveryMan from "@/public/Delivery/pexels-artem-podrez-8988480.jpg";
import styles from "./page.module.css"
import Image from "next/image"
// We will have to import a custom Delivery NavBar


const DeliveryPage = ({ data }) => {
  // const handleClick = () => {

  // }
  return (
    <>
      <Head>
        <title>Deliver For Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <div>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <Image src={DeliveryMan} alt="Delievry Man" />
            </div>
            <div className={styles.right}>
              <div className={styles.title}>
                <h3>Why Deliver For Us?</h3>
              </div>
              <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde officiis, odit veritatis tempore quos nihil, pariatur quis at doloribus repellat incidunt blanditiis neque numquam culpa magnam! Commodi minima illum facere dicta, ea eveniet mollitia voluptate error aut vero alias?</p>
              </div>
              <div className={styles.button}>
                <button className={styles.aboutUs} onClick={{}}>
                  About Us
                </button>
                <button className={styles.register} onClick={() => console.log("Register Now button clicked")}> // should pass the url for signing up when the button is clicked. for now it will output to  the console.
                  Register!!
                </button>
              </div>
              <div className={styles.disclaimer}>
                T&C's apply.
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DeliveryPage;

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/auth/sign-up"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }