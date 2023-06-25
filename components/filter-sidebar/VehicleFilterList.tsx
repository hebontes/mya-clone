import VehicleFilter from "./VehicleFilterItem"
import { vehichleOptions } from "@/utils/data"

const VehicleFilterList = () => {
  return (
    <div className="rounded-t-xl overflow-hidden w-full grid grid-cols-3 divide-x divide-gray-100 ">
      {vehichleOptions.map((vehicle) => (
        <VehicleFilter
          key={vehicle.id}
          alt={vehicle.alt}
          img={vehicle.img}
          active={vehicle.active}
        />
      ))}
    </div>
  )
}

export default VehicleFilterList
