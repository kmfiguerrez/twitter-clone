// These styles apply to every route in the application
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/theme-provider'
import NavMenu from '@/components/nav/nav-menu'
import Sidebar from '@/components/sidebar/sidebar'
import FollowBar from '@/components/follow-bar'
import Modal from '@/components/modal/modal'

const inter = Inter({ subsets: ['latin'] }) 

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <Modal isOpen={true} title='bitch!' actionLabel='submit'></Modal>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="container h-screen border border-blue-500">
            <NavMenu></NavMenu>

            <div className='grid grid-cols-4 h-full border border-red-500'>
              <Sidebar />
              <div className='
              col-span-3
              lg:col-span-2
              border-x-[1px]
              border-neutral-800
              '>
                {children}
              </div>
              <FollowBar />
            </div>
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
