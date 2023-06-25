import FilterSidebar from "@/components/filter-sidebar/FilterSidebar"
import MainProducts from "@/components/main-products/MainProducts"
import Breadcrumbs from "@/components/ui/Breactrumbs/Breadcrumbs"
import Image from "next/image"

export default function Home() {
  return (
    <main className="max-w-container min-h-screen mx-auto ">
      <Breadcrumbs />

      {/* Using gap-5 didn't give pixel perfect results, so I had to go with exact pixel numbers */}
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 mr-[12.5px]">
          <FilterSidebar />
        </div>
        <div className="col-span-9 ml-[7.5px]">
          <MainProducts />
        </div>
      </div>
    </main>
  )
}
