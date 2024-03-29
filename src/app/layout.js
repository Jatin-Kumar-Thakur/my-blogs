import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogger',
  description: 'This is a platform where you can post your blog and make others to know about it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={`container m-auto px-12 min-h-screen flex flex-col justify-between`}>
          <div className="sticky top-0 backdrop-blur-lg z-50">
          <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}