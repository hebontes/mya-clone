import FilterSidebar from "@/components/filter-sidebar/FilterSidebar"
import MainProducts from "@/components/main-products/MainProducts"
import Breadcrumbs from "@/components/ui/Breactrumbs/Breadcrumbs"
import Image from "next/image"
// import { createContext, useState } from "react"

interface SearchProps {
  forRent: string
  mans: string
  cats: string
  priceFrom: string
  priceTo: string
  period: string
  sortOrder: string
  page: number
}
export default function Home() {
  // const SearchContext = createContext<null | SearchProps>(null)
  // const [searchProps, setSearch] = useState<SearchProps>({
  //   forRent: "1",
  //   mans: "",
  //   cats: "",
  //   priceFrom: "",
  //   priceTo: "",
  //   period: "",
  //   sortOrder: "",
  //   page: 1,
  // })

  return (
    <main className="max-w-container min-h-screen mx-auto ">
      <Breadcrumbs />

      {/* Using gap-5 didn't give pixel perfect results, so I had to go with exact pixel numbers */}
      {/* <SearchContext.Provider value={searchProps}> */}
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 mr-[12.5px]">
          <FilterSidebar />
        </div>
        <div className="col-span-9 ml-[7.5px]">
          <MainProducts />
        </div>
      </div>
      {/* </SearchContext.Provider> */}
    </main>
  )
}
