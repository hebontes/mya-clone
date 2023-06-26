import { getLocation } from "@/utils/stringFunctionts"
import React from "react"

const ProductLocation = ({ location_id }: { location_id: number }) => {
  return (
    <div className="flex items-center gap-2">
      <img src="/icons/flag-geo.svg" alt="flag-geo" />
      <span className="text-xx text-black-600">{getLocation(location_id)}</span>
    </div>
  )
}

export default ProductLocation
