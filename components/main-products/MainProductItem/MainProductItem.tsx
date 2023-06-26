import React from "react"
import { cx } from "@/utils/cx"
import Image from "next/image"
import ProductIconInfo from "@/components/ui/product/ProductIconInfo"
import {
  convertNumberToEngine,
  getGearType,
  getFuelType,
} from "@/utils/stringFunctionts"

interface Props {
  product: any
}

const MainProductItem = ({ product }: Props) => {
  return (
    <div className="p-4 flex gap-4">
      <div>
        <Image
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt={product.car_name || "ds"}
          width={178}
          height={140}
          style={{ objectFit: "contain" }}
          className="rounded-lg"
        />
      </div>
      <div className="w-full">
        <div className="text-xx flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="text-sm text-black-800 font-medium">
              {product.car_model}
            </div>
            <div className="text-sm text-black-500">{product.prod_year} წ</div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className={cx(
                product.customs_passed ? "text-green-300" : "text-red-800"
              )}
            >
              {product.customs_passed ? (
                <div className="flex items-center gap-0.5">
                  <img src="/icons/checkbox.svg" alt="checkmark" />
                  განბაჟებული
                </div>
              ) : (
                "განბაჟება"
              )}
            </div>
            <div>s</div>
          </div>
        </div>
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
          text={`${product.wheel_type ? "მარცხენა" : "მარჯვენა"} `}
          src="/icons/sache.svg"
        />

        <div>views {product.views}</div>
      </div>
    </div>
  )
}

export default MainProductItem
