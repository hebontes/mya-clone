import FilterSidebar from "@/components/filter-sidebar/FilterSidebar"
import MainProducts from "@/components/main-products/MainProducts"
import Breadcrumbs from "@/components/ui/Breactrumbs/Breadcrumbs"

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

export async function getProducts(params = "") {
  console.log("🚀 ~ file: page.tsx:17 ~ getProducts ~ params:", params)
  const res = await fetch(
    "https://api2.myauto.ge/ka/products?" +
      new URLSearchParams(params).toString()
  )

  const response = await res.json()

  if (!res.ok) throw new Error("Failed to fetch products")
  return response.data
}

export default async function Home({ searchParams }: any) {
  const data = await getProducts(searchParams)

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
          <MainProducts data={data} />
        </div>
      </div>
      {/* </SearchContext.Provider> */}
    </main>
  )
}
