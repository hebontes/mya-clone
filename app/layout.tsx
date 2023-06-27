import Header from "@/components/header/Header"
import "./globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title:
    "ავტომობილები | MYAUTO.GE ავტომობილების ყიდვა-გაყიდვა ქირაობა-გაქირავება",
  description:
    "ავტომობილები, ქირავდება მანქანა, ავტოპორტალი, სპეცტექნიკა, მოტოტექნიკა, განბაჟება, აუქციონი, მართვის მოწმობა, დილერები, ავტობაზრობა, ავტოლომბარდი, myauto",
  icon: "/favicon.ico",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
