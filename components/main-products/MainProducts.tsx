import { cx } from "@/utils/cx"
import { Meta } from "@/utils/data"
import ProductStickers from "../ui/product/ProductStickers"
import ProductItem from "./ProductItem/ProductItem"
import { SortOrderOptions, PeriodOptions } from "@/utils/selectBoxDataTypes"
import SelectBox from "../ui/selectbox/SelectBox"

const MainProducts = async ({ data }: any) => {
  const products = data.items || []
  const meta: Meta = data.meta

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-black-800">{meta.total} განცხადება</div>
        <div className="gap-2 flex items-center">
          <SelectBox
            defaultTitle="დალაგება"
            options={SortOrderOptions}
            param="SortOrder"
          />
          <SelectBox
            defaultTitle="პერიოდი"
            options={PeriodOptions}
            param="Period"
          />
        </div>
      </div>
      <div className="mt-4">
        {products.map(async (product: any, idx: number) => {
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
        })}
      </div>
    </div>
  )
}

export default MainProducts
