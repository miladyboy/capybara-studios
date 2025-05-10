import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Capybara Studios',
  description: 'Friendly AI tools for everyday life. Meet Thrive, Fitted, and Harem – AI companions designed to help you thrive, look your best, and navigate social situations with confidence.',
  openGraph: {
    title: 'Capybara Studios',
    description: 'Friendly AI tools for everyday life. Meet Thrive, Fitted, and Harem – AI companions designed to help you thrive, look your best, and navigate social situations with confidence.',
    url: 'https://www.capystudios.xyz/',
    siteName: 'Capybara Studios',
    images: [
      {
        url: '/capybaras.png',
        width: 1200,
        height: 630,
        alt: 'Capybara Studios AI Companions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capybara Studios',
    description: 'Friendly AI tools for everyday life. Meet Thrive, Fitted, and Harem – AI companions designed to help you thrive, look your best, and navigate social situations with confidence.',
    images: ['/capybaras.png'],
    creator: '@capybarastudios',
  },
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
