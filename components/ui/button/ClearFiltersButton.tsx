"use client"
import { useRouter } from "next/navigation"

const ClearFiltersButton = () => {
  const router = useRouter()
  return (
    <div className="px-6 py-2 bg-white">
      <button
        onClick={() => router.push("/")}
        className="text-white w-full bg-primaryOrange/50 hover:bg-primaryOrange rounded-md text-sm font-bold py-[9px] flex items-center justify-center leading-none"
      >
        ყველა ფილტრის წაშლა
      </button>
    </div>
  )
}

export default ClearFiltersButton
