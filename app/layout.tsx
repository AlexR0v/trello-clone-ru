import { siteConfig }    from '@/config/site'
import type { Metadata } from 'next'
import { Montserrat }    from 'next/font/google'
import React             from 'react'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang='ru'>
    <body className={inter.className}>{children}</body>
    </html>
  )
}
