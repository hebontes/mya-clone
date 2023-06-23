import VehicleFilter from "./VehicleFilter"
import { vehichleOptions } from "@/utils/data"

const VehicleFilters = () => {
  return (
    <div className=" w-full grid grid-cols-3 divide-x divide-gray-100 ">
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

export default VehicleFilters
