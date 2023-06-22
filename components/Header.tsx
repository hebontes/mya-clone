import React from "react"
import Image from "next/image"

const Header = () => {
  return (
    <div className="h-20 bg-white py-4">
      <div className="max-w-5xl w-full mx-auto">
        <Image src="/img/logo.svg" alt="myauto logo" width={164} height={46} />
      </div>
    </div>
  )
}

export default Header
