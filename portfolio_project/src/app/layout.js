import { Footer } from '../components/Footer/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FoodLinx',
  description: 'Online Food Delivery Software/Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
