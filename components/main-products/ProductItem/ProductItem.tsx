import React, { Suspense } from "react"
import Image from "next/image"

import ProductMan from "./ProductMan"
import ManLoader from "@/components/ui/loading/ManLoader"
import ProductLocation from "./ProductLocation"
import ProductIsGanbajebuli from "./ProductIsGanbajebuli"
import ProductInfo from "./ProductInfo"

interface Props {
  product: any
}

const MainProductItem = ({ product }: Props) => {
  return (
    // <Suspense fallback={<CardLoader />}>
    <div className="p-4 flex gap-4">
      <Image
        src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
        alt={product.car_name || "car"}
        width={178}
        height={140}
        style={{ objectFit: "cover" }}
        className="rounded-lg shrink-0"
      />

      <div id="description" className="w-full flex flex-col">
        <div className="flex justify-between items-center">
          <Suspense fallback={<ManLoader />}>
            <ProductMan product={product} />
          </Suspense>

          <div className="text-xx flex items-center gap-4">
            <ProductIsGanbajebuli customs_passed={product.customs_passed} />
            <ProductLocation location_id={product.location_id} />
          </div>
        </div>

        <ProductInfo product={product} />
      </div>
    </div>
    // </Suspense>
  )
}

export default MainProductItem
