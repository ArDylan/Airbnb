import Image from 'next/image';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className='text-rose-500'>Hello airbnb</div>
        
      </body>
    </html>
  )
}
