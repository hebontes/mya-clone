import Header from "@/components/header/Header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title:
    "ავტომობილები | MYAUTO.GE ავტომობილების ყიდვა-გაყიდვა ქირაობა-გაქირავება",
  description:
    "ავტომობილები, ქირავდება მანქანა, ავტოპორტალი, სპეცტექნიკა, მოტოტექნიკა, განბაჟება, აუქციონი, მართვის მოწმობა, დილერები, ავტობაზრობა, ავტოლომბარდი, myauto",
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
