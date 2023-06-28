"use client"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Header = () => {
  const router = useRouter()
  const forceReload = () => {
    router.replace("http://localhost:3000")
  }

  return (
    <div className="h-20 bg-white py-4">
      <div className="max-w-container w-full mx-auto">
        <Link href="/" onClick={forceReload}>
          <Image
            className="select-none"
            src="/logo.svg"
            alt="myauto-logo"
            width={164}
            height={46}
            // This is required because logo.svg was detected as LCP (Largest Contentful Paint)
            priority
          />
        </Link>
      </div>
    </div>
  )
}

export default Header
