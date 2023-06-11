// src/components/about/AboutPage.js

import React from 'react';
import about from './about.module.scss';

const About = () => {
  return (
    <div className={about.container}>
      <h1 className={about.title}>About FoodLinx</h1>
      <p className={about.description}>
        FoodLinx is a revolutionary app that connects riders and drivers in a seamless and efficient way. 
        With our cutting-edge technology and user-friendly interface, we are transforming the transportation industry.
      </p>
      <div className={about.features}>
        <div className={about.feature}>
          <h2 className={about.featureTitle}>Efficient Rides</h2>
          <p className={about.featureDescription}>
            With our advanced matching algorithm, we ensure that riders are connected to the nearest available drivers,
            making the rides more efficient and reducing waiting times.
          </p>
        </div>
        <div className={about.feature}>
          <h2 className={about.featureTitle}>Safe and Secure</h2>
          <p className={about.featureDescription}>
            Safety is our top priority. We have rigorous safety measures in place, including driver background checks,
            live trip tracking, and an emergency helpline, to ensure a safe and secure experience for our users.
          </p>
        </div>
        <div className={about.feature}>
          <h2 className={about.featureTitle}>Seamless Payments</h2>
          <p className={about.featureDescription}>
            With our integrated payment system, you can forget about carrying cash. Pay for your rides effortlessly
            using our secure and convenient payment methods, including credit/debit cards and digital wallets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
