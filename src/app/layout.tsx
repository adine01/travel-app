import "./globals.css"
import { Inter } from "next/font/google"
import { AuthProvider } from "./components/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Travel Plan App",
  description: "Plan your next adventure",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

