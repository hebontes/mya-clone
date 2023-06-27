import { cx } from "@/utils/cx"
import { Meta } from "@/utils/data"
import ProductStickers from "../ui/product/ProductStickers"
import ProductItem from "./ProductItem/ProductItem"

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

const MainProducts = async ({ setSearch }: any) => {
  const data = await getProducts()

  const products = data.items || []
  const meta: Meta = data.meta

  const renderProducts = () =>
    products.map(async (product: any, idx: number) => {
      return (
        <div
          key={product.car_id}
          className={cx(
            "rounded-[14px] mb-2.5 overflow-hidden",
            product.stickers
              ? "bg-green-50 border border-green-200"
              : "bg-white"
          )}
        >
          <ProductItem product={product} />
          {product.stickers && <ProductStickers />}
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
