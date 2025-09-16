import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TranslationProvider } from '@/contexts/TranslationContext'
import { IconProvider } from '@/contexts/IconContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hossein Gerami – Portfolio',
  description: 'Portfolio of Hossein Gerami – Mobile & Software Engineer. React Native, Integrations, Data Flows, NDIS SaaS, AWS, and AI-assisted engineering.',
  keywords: 'Hossein Gerami, Portfolio, React Native, Integrations, Node.js, AWS, NDIS, Xero, MYOB, Dynamics, HubSpot, SaaS, Mobile, AI',
  authors: [{ name: 'Hossein Gerami' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Hossein Gerami – Portfolio',
    description: 'Explore projects in mobile, integrations, and data engineering. View achievements and tech stacks.',
    images: ['https://hosseingerami.com/images/image001.jpg'],
    type: 'website',
    url: 'https://hosseingerami.com/',
    siteName: 'Hossein Gerami Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hossein Gerami – Portfolio',
    description: 'React Native, Integrations, Data Flows, and AI-assisted problem solving.',
    images: ['https://hosseingerami.com/images/image001.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#0b1220',
  colorScheme: 'dark light',
  viewport: 'width=device-width, initial-scale=1.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
          <link
            href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Tahoma:wght@400;700&display=swap"
            rel="stylesheet"
          />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.className} light`}>
          <TranslationProvider>
            <IconProvider>
              {children}
            </IconProvider>
          </TranslationProvider>
        </body>
    </html>
  )
}