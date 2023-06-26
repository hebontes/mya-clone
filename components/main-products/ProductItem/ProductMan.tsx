import React from "react"
import { mansJsonData } from "@/utils/data"

async function getAllManufacturers() {
  const res = await fetch("https://static.my.ge/myauto/js/mans.json")
  const response = await res.json()

  // simulate 10 seconds sleep
  // await new Promise((resolve) => setTimeout(resolve, 10000))

  if (!res.ok) throw new Error("Failed to fetch products")

  return response
}

async function getModelByMan(man_id: string | number) {
  const res = await fetch(
    `https://api2.myauto.ge/ka/getManModels?man_id=${man_id}`
  )
  const response = await res.json()

  if (!res.ok) throw new Error("Failed to fetch products")

  return response.data
}

const ProductMan = async ({ product }: { product: any }) => {
  const mansApi = await getAllManufacturers()
  const currentMan = mansApi.find((man: any) => {
    return Number(man.man_id) === product.man_id
  })

  const modelsApi = await getModelByMan(product.man_id)
  const currentModel = modelsApi.find((model: any) => {
    return model.model_id === product.model_id
  })

  return (
    <div className="flex gap-2 items-center text-sm">
      <div className=" text-black-800 font-medium">
        {currentMan.man_name} {currentModel.model_name}
      </div>
      <div className="text-black-500">{product.prod_year} წ</div>
    </div>
  )
}

export default ProductMan
