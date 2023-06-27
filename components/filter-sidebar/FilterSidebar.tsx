import VehicleFilters from "./VehicleFilterList"
import SelectBox from "../ui/selectbox/SelectBox"
import CurrencyButton from "../ui/button/CurrencyButton"
import PrimaryButton from "../ui/button/PrimaryButton"
import { ForRentOptions } from "@/utils/selectBoxDataTypes"
import { getAllManufacturers, getCats } from "@/server/server"
import ClearFiltersButton from "../ui/button/ClearFiltersButton"

const FilterSidebar = async ({ setSearch }: any) => {
  const cats = await getCats()
  const mans = await getAllManufacturers()

  return (
    <div className="rounded-t-xl bg-white outline outline-gray-200 shadow-filterBox">
      <VehicleFilters />
      <form>
        <div className="p-6 pt-[22px] flex flex-col gap-5">
          <SelectBox
            boxtitle={"გარიგების ტიპი"}
            options={ForRentOptions}
            param="ForRent"
          />

          {/* https://static.my.ge/myauto/js/mans.json */}
          {mans && (
            <SelectBox
              param="Mans"
              defaultTitle="მწარმოებელი"
              boxtitle="მწარმოებელი"
              options={mans.map((man: any) => {
                if (man.man_id && man.man_name) {
                  return { value: man.man_id, label: man.man_name }
                }
              })}
            />
          )}
          {/* https://api2.myauto.ge/ka/cats/get */}
          {cats && (
            <SelectBox
              boxtitle="კატეგორია"
              defaultTitle="კატეგორია"
              param="Cats"
              options={cats.map((cat: any) => {
                if (cat.category_id && cat.title) {
                  return { value: cat.category_id, label: cat.title }
                }
              })}
            />
          )}
        </div>
        <div className="pt-4 px-6 pb-11 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sx">ფასი</div>
            <CurrencyButton />
          </div>
          <div className="flex w-full justify-between items-center mt-[18px]">
            <input
              placeholder="დან"
              className="text-sx placeholder:text-black-500 w-full outline outline-1 outline-gray-300 rounded-lg py-2.5 px-2.5"
            />
            <div className="mx-1 text-[#8C929B]">-</div>
            <input
              placeholder="მდე"
              className="text-sx placeholder:text-black-500 w-full outline outline-1 outline-gray-300 rounded-lg py-2.5 px-2.5"
            />
          </div>
        </div>

        <div className="px-6 pt-4 pb-5 shadow-searchBox ">
          <PrimaryButton text="ძებნა 197,963" />
        </div>
      </form>
    </div>
  )
}
export default FilterSidebar
