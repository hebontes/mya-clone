import SelectBox from "../ui/selectbox/SelectBox"
import PrimaryButton from "../ui/button/PrimaryButton"
import CurrencyButton from "../ui/button/CurrencyButton"
import ForRent from "../ui/selectbox/ForRent"

const FilterForm = ({ setSearch }: any) => {
  return (
    <form>
      <div className="p-6 pt-[22px] flex flex-col gap-5">
        <SelectBox
          boxtitle={"გარიგების ტიპი"}
          options={[
            { label: "იყიდება", value: 0 },
            { label: "ქირავდება", value: 1 },
          ]}
        />

        <ForRent />

        {/* https://static.my.ge/myauto/js/mans.json */}
        <SelectBox boxtitle={"მწარმოებელი"} options={["any"]} />

        {/* https://api2.myauto.ge/ka/cats/get */}
        <SelectBox boxtitle={"კატეგორია"} options={["any"]} />
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
  )
}

export default FilterForm
