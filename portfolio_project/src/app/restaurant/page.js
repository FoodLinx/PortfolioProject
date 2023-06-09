"use client"

import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Catalog from '@/src/components/Catalog/Catalog'
import Hero from '@/src/components/Hero/Hero'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function RestaurantHomePage({ meals }) {
  return (
    <>
      <Head>
        <title>FoodLinx</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
      </div>
    </>
  )
}

// export async function getServerSideProps() {
//   const { data } = await axios.get(
//     "http://localhost:3000/api/restaurant"
//   );

//   return {
//     props: {
//       orders: data,
//     },
//   };
// }