import { RestaurantFooter } from '../components/Footer/RestaurantFooter'
import { RestaurantNavbar } from '../components/Navbar/RestaurantNavbar'
import './page.module.css'
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
          <RestaurantNavbar/>
          {children}
          <RestaurantFooter/>
        </div>
      </body>
    </html>
  )
}