"use client";

import { ThemeProvider } from 'next-themes'
import './globals.css'
import Navbar from './Navbar'


export const metadata = {
  title: 'Jeff | Full-Stack Developer',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='relative'>
        <ThemeProvider attribute='class'>
        <Navbar />
        <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
