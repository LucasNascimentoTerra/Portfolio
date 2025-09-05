import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lucas Terra",
  description: "Software Developer | IT Graduate",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/jpg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
