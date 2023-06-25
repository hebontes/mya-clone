// "use client"
import { Meta } from "@/utils/data"
import Image from "next/image"
import React from "react"

async function getProducts() {
  const res = await fetch("https://api2.myauto.ge/ka/products/", {
    cache: "no-store",
  })
  const response = await res.json()

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.data
}

const MainProducts = async () => {
  const data = await getProducts()

  const products = data.items || []
  const meta: Meta = data.meta

  const renderProducts = () =>
    products.map(async (product: any, idx: number) => {
      return (
        <div key={product.car_id} className="bg-white rounded-[14px] mb-2.5">
          <div className="p-4 flex gap-4">
            <div>
              <Image
                src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
                alt={product.car_name}
                width={178}
                height={140}
                className="rounded-lg"
              />
            </div>
            <div>
              <div>{product.car_id}</div>
              <div>{product.prod_year}</div>
              <div>გრბენი {product.car_run_km}</div>
            </div>
          </div>
        </div>
      )
    })
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-black-800">{meta.total} განცხადება</div>
        <div>Filter 1 Filter 2</div>
      </div>
      <div>{renderProducts()}</div>
    </div>
  )
}

export default MainProducts
