import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoDesign - Open-Source Collaborative Design Platform',
  description: 'Create, collaborate, and design together in real-time with AI assistance. An open-source alternative to Figma.',
  keywords: ['design', 'collaboration', 'figma-alternative', 'open-source', 'ai-powered'],
  authors: [{ name: 'CoDesign Team' }],
  creator: 'CoDesign Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codesign.dev',
    title: 'CoDesign - Open-Source Collaborative Design Platform',
    description: 'Create, collaborate, and design together in real-time with AI assistance.',
    siteName: 'CoDesign',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoDesign - Open-Source Collaborative Design Platform',
    description: 'Create, collaborate, and design together in real-time with AI assistance.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-gray-50 text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
