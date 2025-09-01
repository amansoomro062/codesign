import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
// import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "CoDesign | Open Source AI-Powered Design Platform",
  description:
    "The world's first open-source AI-powered design platform. Real-time collaboration meets intelligent assistance in a tool built by the community, for the community.",
  keywords: "design, open source, AI, collaboration, design tools, community, figma alternative",
  authors: [{ name: "CoDesign Community" }],
  creator: "CoDesign",
  publisher: "CoDesign",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "CoDesign | Open Source AI-Powered Design Platform",
    description: "Real-time collaboration meets intelligent assistance in the world's first open-source AI-powered design platform.",
    type: "website",
    url: "https://codesign.dev",
    siteName: "CoDesign",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoDesign | Open Source AI-Powered Design Platform",
    description: "Real-time collaboration meets intelligent assistance in the world's first open-source AI-powered design platform.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
