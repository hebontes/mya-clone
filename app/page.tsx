import Breadcrumbs from "@/components/UI/Breadcrumbs"
import Image from "next/image"

export default function Home() {
  return (
    <main className="max-w-container min-h-screen mx-auto ">
      <Breadcrumbs />
      <div className="grid grid-cols-12 bg-blue-600">
        {/* Using gap-5 didn't give pixel perfect results */}
        <div className="bg-red-500 col-span-3 mr-[12.5px]">s</div>
        <div className="bg-red-500 col-span-9 ml-[7.5px]">a</div>
      </div>
    </main>
  )
}
