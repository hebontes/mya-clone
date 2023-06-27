import { Suspense } from "react"
import Image from "next/image"

import ProductMan from "../../ui/product/ProductMan"
import ManLoader from "@/components/ui/loading/ManLoader"
import ProductLocation from "../../ui/product/ProductLocation"
import ProductIsGanbajebuli from "../../ui/product/ProductIsGanbajebuli"
import ProductInfo from "./ProductInfo"
import ProductPrice from "@/components/ui/product/ProductPrice"
import ProductInfoMobile from "./ProductInfoMobile"

interface Props {
  product: any
}

const ProductItem = ({ product }: Props) => {
  return (
    // <Suspense fallback={<CardLoader />}>

    <div className="p-4 flex md:flex-row flex-col gap-4">
      <div
        id="mobile"
        className="flex md:hidden flex-col justify-between gap-2.5"
      >
        <Suspense fallback={<ManLoader />}>
          <ProductMan product={product} />
        </Suspense>

        <div className="text-xx flex items-center justify-between gap-4">
          <ProductPrice price_value={product.price_value} />
          <ProductIsGanbajebuli customs_passed={product.customs_passed} />
        </div>
      </div>

      <div className="relative h-[240px] w-full md:h-[140px] md:w-[178px] shrink-0">
        <Image
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt={product.car_name || "car"}
          fill
          className="rounded-2xl md:rounded-lg object-cover"
        />
      </div>

      <ProductInfoMobile product={product} />

      <div id="desktop" className="w-full hidden md:flex flex-col">
        <div className="hidden md:flex justify-between items-center">
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

export default ProductItem
