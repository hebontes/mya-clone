export interface vehichleOptionsTypes {
  id?: number
  img: string
  alt: string
  active?: boolean
}
export const vehichleOptions: vehichleOptionsTypes[] = [
  {
    id: 1,
    img: "/img/car.svg",
    alt: "car",
    active: true,
  },
  {
    id: 1,
    img: "/img/tractor.svg",
    alt: "tractor",
  },
  {
    id: 1,
    img: "/img/moto.svg",
    alt: "moto",
  },
]
