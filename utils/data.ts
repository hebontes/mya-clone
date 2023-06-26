import mansJson from "./mans.json"

export interface vehichleOptionsTypes {
  id?: number
  src: string
  alt: string
}
export interface Meta {
  total: number
  per_page: number
  current_page: number
  last_page: number
}

export const vehichleOptions: vehichleOptionsTypes[] = [
  {
    id: 1,
    src: "/icons/car",
    alt: "car",
  },
  {
    id: 2,
    src: "/icons/tractor",
    alt: "tractor",
  },
  {
    id: 3,
    src: "/icons/moto",
    alt: "moto",
  },
]
export const mansJsonData = mansJson
// Give me typescript interface for dummyProductData
