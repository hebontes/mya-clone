import ProductIconInfo from "@/components/ui/product/ProductIconInfo"
import {
  convertNumberToEngine,
  getGearType,
  getFuelType,
} from "@/utils/stringFunctionts"

const ProductInfo = ({ product }: any) => {
  return (
    <div className="flex md:flex-row flex-column">
      <div>
        <ProductIconInfo
          text={`${product.car_run_km} კმ`}
          src="/icons/speed.svg"
        />

        <ProductIconInfo
          text={`${convertNumberToEngine(product.engine_volume)} ${getFuelType(
            product.fuel_type_id
          )}`}
          src="/icons/motor.svg"
        />
        <ProductIconInfo
          text={`${getGearType(product.gear_type_id)} `}
          src="/icons/avtomatic.svg"
        />

        <ProductIconInfo
          text={`${product.right_wheel ? "მარჯვენა" : "მარცხენა"} `}
          src="/icons/sache.svg"
        />
      </div>
      <div id="product_price">
        {product.price_value === 0 ? (
          <span className="text-black-800 font-sm">ფასი შეთანხმებით</span>
        ) : (
          <div>price in gel {product.price_value}</div>
        )}
      </div>
      <div>views {product.views}</div>
    </div>
  )
}

export default ProductInfo
