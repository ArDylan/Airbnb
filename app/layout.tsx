import './globals.css';
import { Inter, Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Aplikasi pencari rumah',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div>
          {children}
        </div>
        </body>
    </html>
  )
}
