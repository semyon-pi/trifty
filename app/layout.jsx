import Footer from '@components/Footer'
import Nav from '@components/Nav'
import '@styles/globals.css'
import { children } from 'react'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'

export const metadata = {
  title: 'Trifty',
  description: ' Discover & Sell Second Hand Clothing Articles',
}

const RootLayout = ({ children }) => {
  return (
    <html dir='rtl' lang='he'>
      <body>
        <UserProvider>
          <CartProvider>
            <main className='app '>
              <Nav />
              {children}
              <Footer />
            </main>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  )
}

export default RootLayout
