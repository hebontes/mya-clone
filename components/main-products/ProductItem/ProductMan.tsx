import { getAllManufacturers, getModelByMan } from "@/server/server"
import { mansJsonData } from "@/utils/data"

const ProductMan = async ({ product }: any) => {
  // Initiate both requests in parallel
  const mansData = getAllManufacturers()
  const modelsData = getModelByMan(product.man_id)

  // Wait for the promises to resolve
  const [mans, models] = await Promise.all([mansData, modelsData])

  const currentMan = mans.find(
    (man: any) => Number(man.man_id) === product.man_id
  )
  const currentModel = models.find(
    (model: any) => model.model_id === product.model_id
  )

  return (
    <div className="flex gap-2 items-center text-sm">
      <div className=" text-black-800 font-medium">
        {currentMan && currentMan.man_name}{" "}
        {currentModel && currentModel.model_name}
      </div>
      <div className="text-black-500">{product.prod_year} წ</div>
    </div>
  )
}

export default ProductMan
