import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Memberly',
  description: 'Created by memberly',
  generator: 'memberly.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
