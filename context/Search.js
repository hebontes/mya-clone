import { useRouter } from "next/router"

const SORT_BY = [
  { label: "თარიღი კლებადი", value: "relevance" },
  { label: "თარიღი ზრდადი", value: "price_asc" },
  { label: "ფასი კლებადი", value: "mileage_asc" },
  { label: "ფასი ზრდადი", value: "price_desc" },
  { label: "გარბენი კლებადი", value: "mileage_asc" },
  { label: "გარბენი ზრდადი", value: "mileage_asc" },
]
// type Period = "1h" | "2h" | "3h" | "1d" | "2d" | "3d" | "1w" | "2w" | "3w"
// type SortOrder = "1" | "2" | "3" | "4" | "5" | "6"

const Search = () => {
  const router = useRouter()

  const {
    forRent = "",
    mans = "",
    cats = "",
    priceFrom = "",
    priceTo = "",
    period = "",
    sortOrder = "",
    page = 1,
  } = router.query

  const filterSearch = ({
    forRent,
    mans,
    cats,
    priceFrom,
    priceTo,
    period,
    sortOrder,
    page,
  }) => {
    const { query } = router
    if (page) query.page = page
    if (forRent) query.forRent = forRent
    if (mans) query.mans = mans
    if (cats) query.cats = cats
    if (priceFrom) query.priceFrom = priceFrom
    if (priceTo) query.priceTo = priceTo
    if (period) query.period = period
    if (sortOrder) query.sortOrder = sortOrder

    router.push({ pathname: router.pathname, query: query })
  }

  const pageHandler = (page) => {
    filterSearch({ page })
  }
  const forRentHandler = (forRent) => {
    filterSearch({ forRent })
  }


  const { state, dispatch } = useContext(Store)
}

export default Search

// ForRent
// 0 ან 1
// 0 - იყიდება, 1 - ქირავდება
// Mans
// {man_id}.{model_id}.{model_id}
// მაგ: 2.27.28

// {man_id}.{model_id}.{model_id}-{man_id}.{model_id}.{model_id}-{man_id}.{model_id}.{model_id}
// მაგ: 2.27.28-3.35.36-4.64.65.66
// მწარმოებლის იდენტიფიკატორი მწარმოებლების სიიდან

// მოდელის შემთხვევაში შესაბამისი მოდელის იდენტიფიკატორები მოდელების სიიდან

// Cats
// {category_id}.{category_id}
// კატეგორიის იდენტიფიკატორები კატეგორიების სიიდან
// PriceFrom

// მინიმალური ფასი
// PriceTo

// მაქსიმალური ფასი
// Period
// 1h, 2h, 3h, 1d, 2d, 3d, 1w, 2w, 3w
// h - საათი
// d- დღე
// w - კვირა
// SortOrder
// 1,2,3,4,5,6
// 1 - თარიღი კლებადი
// 2 - თარიღი ზრდადი
// 3 - ფასი კლებადი
// 4 - ფასი ზრდადი
// 5 - გარბენი კლებადი
// 6 - გარბენი ზრდადი

// Page
// 1…n
// გვერდი

// export const SearchContext = createContext({
//   search: {
//     search: "",
//     category: "",
//     brand: "",
//     model: "",
//     year: "",
//     price: "",
//     currency: "",
//     fuelType: "",
//     gearType: "",
//     engineVolume: "",
//     carRun: "",
//     color: "",
//     city: "",
//     custom: "",
//     custom2: "",
//     custom3: "",
//   },
//   setSearch: (search: any) => {},
//   sort: "relevance",
//   setSort: (sort: any) => {},
//   page: 1,
//   setPage: (page: any) => {},
//   limit: 12,
//   setLimit: (limit: any) => {},
//   total: 0,

//   setTotal: (total: any) => {},
//   products: [],
//   setProducts: (products: any) => {},

//   loading: false,

//   setLoading: (loading: any) => {},
//   error: false,

//   setError: (error: any) => {},
//   filter: false,

//   setFilter: (filter: any) => {},
//   filterData: {
//     brands: [],
//     models: [],
//     years: [],
//     prices: [],

//     fuelTypes: [],
//     gearTypes: [],
//     engineVolumes: [],
//     carRuns: [],
//     colors: [],
//     cities: [],
//     custom: [],
//     custom2: [],

//     custom3: [],
//   }
// })
