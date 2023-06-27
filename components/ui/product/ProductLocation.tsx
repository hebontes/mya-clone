import { getLocation } from "@/utils/stringFunctionts"

const ProductLocation = ({ location_id }: { location_id: number }) => {
  return (
    <div className="flex items-center gap-3 md:gap-2">
      <img src="/icons/flag-geo.svg" alt="flag-geo" />
      <span className="text-xs font-light md:font-normal text-black-700 md:text-xx md:text-black-600">
        {getLocation(location_id)}
      </span>
    </div>
  )
}

export default ProductLocation
