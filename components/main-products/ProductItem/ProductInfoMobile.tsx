import ProductIconInfo from "@/components/ui/product/ProductIconInfo"
import ProductLocation from "@/components/ui/product/ProductLocation"
import ProductPrice from "@/components/ui/product/ProductPrice"
import {
  convertNumberToEngine,
  getGearType,
  getFuelType,
  getRecentlyDate,
} from "@/utils/stringFunctionts"

const ProductInfoMobile = ({ product }: any) => {
  return (
    <div className="block md:hidden">
      <div>
        <div className="flex mb-2.5">
          <div className="w-1/2">
            <ProductIconInfo
              text={`${product.car_run_km} კმ`}
              src="/icons/speed.svg"
            />
          </div>
          <div className="w/1/2">
            <ProductIconInfo
              text={`${convertNumberToEngine(
                product.engine_volume
              )} ${getFuelType(product.fuel_type_id)}`}
              src="/icons/motor.svg"
            />
          </div>
        </div>

        <div className="flex mb-2.5">
          <div className="w-1/2">
            <ProductIconInfo
              text={`${getGearType(product.gear_type_id)} `}
              src="/icons/avtomatic.svg"
            />
          </div>
          <div className="w/1/2">
            <ProductIconInfo
              text={`${product.right_wheel ? "მარჯვენა" : "მარცხენა"} `}
              src="/icons/sache.svg"
            />
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <ProductLocation location_id={product.location_id} />
          </div>
          <div className="w/1/2"></div>
        </div>
      </div>

      <div className="border-t flex flex-1 flex-col mt-4 pt-3 pb-1 md:gap-3">
        {/* VIEWS AND DATE */}
        <div className="mt-auto text-xs text-gray-400 md:text-black-600 flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <div className="flex gap-2 items-center">
              <img src="/icons/hot.svg" alt="hot" />
              {product.views} ნახვა
            </div>
            <img src="/icons/oval.svg" alt="oval" />
            <div>{getRecentlyDate(product.order_date)}</div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer opacity-70">
            <img src="/icons/note.svg" alt="note" />
            <img src="/icons/shedareba.svg" alt="compare" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfoMobile
