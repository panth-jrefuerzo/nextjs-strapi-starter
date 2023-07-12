import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navigation/Navbar'
import AuthProvider from './context/AuthProvider'

const layoutClasses = "dark:bg-slate-900";

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={layoutClasses}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}