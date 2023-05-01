import './globals.css';
import { Inter, Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Away',
  description: 'Aplikasi pencari rumah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div>
          {children}
        </div>
        </body>
    </html>
  )
}
