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
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
