import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navigation/Navbar'
import AuthProvider from './context/AuthProvider'
import Footer from './components/Footer/Footer';
import Providers from './context/ThemeProvider';

const layoutClasses = "dark:bg-slate-900";

export const metadata = {
  title: 'NextJS Strapi Starter with Auth',
  description: 'A powerful, all-in-one boilerplate to kickstart your web development journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={layoutClasses}>
        <Providers>
          <AuthProvider>
            <Navbar />
            <main className="flex justify-center items-start p-6 min-h-screen">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </Providers>
      </body>
    </html>
  )
}