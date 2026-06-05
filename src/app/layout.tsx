import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({ subsets: ['latin'], variable: '--font-syne', weight: ['400','500','600','700','800'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm', weight: ['300','400','500'] })

export const metadata: Metadata = {
  title: 'Bharanidharan M | WordPress Developer & UI/UX Designer',
  description: 'Passionate WordPress Developer and UI/UX Designer from Tamil Nadu — building responsive websites and designing intuitive user experiences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  )
}
