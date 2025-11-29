import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwritten",
})

export const metadata: Metadata = {
  title: "Coffee Shop - Great Coffee For Some Joy",
  description:
    "Experience the finest artisanal coffee with our specialty brews including Espresso, Americano, and Cappuccino",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${playfairDisplay.variable} ${caveat.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}