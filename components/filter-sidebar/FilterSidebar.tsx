import FilterTab from "./VehicleFilter"
import { vehichleOptions } from "@/utils/data"
import VehicleFilters from "./VehicleFilters"

const FilterSidebar = () => {
  return (
    <div className="rounded-t-xl overflow-hidden border border-gray-200 shadow-filterBox">
      <VehicleFilters />
      <div></div>
    </div>
  )
}
export default FilterSidebar
