import ProductIconInfo from "@/components/ui/product/ProductIconInfo"
import {
  convertNumberToEngine,
  getGearType,
  getFuelType,
  getRecentlyDate,
} from "@/utils/stringFunctionts"

const ProductInfo = ({ product }: any) => {
  return (
    <div className="flex flex-1 flex-col mt-5 md:gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <ProductIconInfo
            text={`${convertNumberToEngine(
              product.engine_volume
            )} ${getFuelType(product.fuel_type_id)}`}
            src="/icons/motor.svg"
          />
          <ProductIconInfo
            text={`${product.car_run_km} კმ`}
            src="/icons/speed.svg"
          />
        </div>

        <div id="product_price " className="ml-auto">
          {product.price_value === 0 ? (
            <span className="text-black-800 text-sm">ფასი შეთანხმებით</span>
          ) : (
            <div className="flex items-center gap-1">
              <div className="text-black-800 text-xl">
                {" "}
                {product.price_value.toLocaleString()}
              </div>
              <img src="/icons/valute.svg" alt="lari-valute" />
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-8 items-center mb-auto">
        <ProductIconInfo
          text={`${getGearType(product.gear_type_id)} `}
          src="/icons/avtomatic.svg"
        />

        <ProductIconInfo
          text={`${product.right_wheel ? "მარჯვენა" : "მარცხენა"} `}
          src="/icons/sache.svg"
        />
      </div>

      {/* VIEWS AND DATE */}
      <div className="mt-auto text-xs text-black-600 flex items-center justify-between ">
        <div className="flex items-center gap-1">
          <div>{product.views} ნახვა</div>
          <img src="/icons/oval.svg" alt="oval" />
          <div>{getRecentlyDate(product.order_date)}</div>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <img src="/icons/note.svg" alt="eye" />
          <img src="/icons/shedareba.svg" alt="eye" />
          <img src="/icons/favorite.svg" alt="eye" />
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
