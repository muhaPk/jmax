import './globals.css'
import Navbar from '../components/layout/Navbar'
import { montserrat, donpoligrafbum } from "./fonts";


export const metadata = {
  title: 'J MAX BG',
  description: 'ДЖЕЙ МАКС ЕООД',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${donpoligrafbum.variable} scroll-smooth`} >
      <body>
        {children}
      </body>
    </html>
  )
}
