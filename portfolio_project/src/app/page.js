"use client"
 
import Image from 'next/image'
import home from './home.module.scss'
import { BiCurrentLocation } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import { Merienda } from 'next/font/google'
import plate from '@/public/plate.png'

const merienda = Merienda({
  subsets: ['latin-ext'],
})

export default function Home() {
  return (
    <main className={home.main}>
      <div className={home.hero}>
        <div className={home.hero_text}>
          <h1>
            Order food online from your favourite local restaurants<span>.</span>
          </h1>
        </div>
        <div className={home.fresh}>
          <h2 className={merienda.className}>Freshly made food delivered to your door.</h2>
        </div>
        <div className={home.search}>
          <div className={home.icon}>
            <BiCurrentLocation />
          </div>
          <input type="text" placeholder="Enter your delivery address" />
          <button>
            <FiSearch/>
            Find food
          </button>
        </div>
      </div>
      
      <div>
        {/* temporal image */}
        <Image 
          src={plate}
          width={700}
          height={700}
          alt="Pizza"
        />
      </div>
    </main>
  )
}
