import Image from "next/image"

const Header = () => {
  return (
    <div className="h-20 bg-white py-4">
      <div className="max-w-container w-full mx-auto">
        <Image
          className="select-none"
          src="/logo.svg"
          alt="myauto-logo"
          width={164}
          height={46}
          // This is required because logo.svg was detected as LCP (Largest Contentful Paint)
          priority
        />
      </div>
    </div>
  )
}

export default Header
