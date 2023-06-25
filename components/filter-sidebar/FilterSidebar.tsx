import FilterTab from "./VehicleFilterItem"
import { vehichleOptions } from "@/utils/data"
import VehicleFilters from "./VehicleFilterList"
import FilterForm from "./FilterForm"

const FilterSidebar = () => {
  return (
    <div className="rounded-t-xl bg-white outline outline-gray-200 shadow-filterBox">
      <VehicleFilters />
      <FilterForm />
    </div>
  )
}
export default FilterSidebar
