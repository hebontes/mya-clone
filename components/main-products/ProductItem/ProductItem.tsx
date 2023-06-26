import React, { Suspense } from "react"
import { cx } from "@/utils/cx"
import Image from "next/image"
import ProductIconInfo from "@/components/ui/product/ProductIconInfo"
import {
  convertNumberToEngine,
  getGearType,
  getFuelType,
} from "@/utils/stringFunctionts"
import ProductMan from "./ProductMan"
import ManLoading from "@/components/ui/loading/ManLoading"
import CardLoader from "@/components/ui/loading/CardLoader"
import ProductLocation from "./ProductLocation"

interface Props {
  product: any
}

const MainProductItem = ({ product }: Props) => {
  return (
    <Suspense fallback={<CardLoader />}>
      <div className="p-4 flex gap-4">
        <div className="shrink-0">
          <Image
            src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
            alt={product.car_name || "ds"}
            width={178}
            height={140}
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <ProductMan product={product} />

            <div className="text-xx flex items-center gap-4">
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
              <ProductLocation location_id={product.location_id} />
            </div>
          </div>

          <ProductIconInfo
            text={`${product.car_run_km} კმ`}
            src="/icons/speed.svg"
          />

          <ProductIconInfo
            text={`${convertNumberToEngine(
              product.engine_volume
            )} ${getFuelType(product.fuel_type_id)}`}
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

          <div>views {product.views}</div>
        </div>
      </div>
    </Suspense>
  )
}

export default MainProductItem
