import React from "react"
import SelectBox from "../ui/selectbox/SelectBox"

const FilterForm = () => {
  return (
    <form>
      <div className="p-6 flex flex-col gap-5">
        <SelectBox
          boxtitle={"გარიგების ტიპი"}
          options={[
            { label: "იყიდება", value: 0 },
            { label: "ქირავდება", value: 1 },
          ]}
        />

        <SelectBox boxtitle={"მწარმოებელი"} options={["any"]} />
        <SelectBox boxtitle={"კატეგორია"} options={["any"]} />
      </div>
    </form>
  )
}

export default FilterForm
