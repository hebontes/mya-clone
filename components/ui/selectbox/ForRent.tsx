"use client"
import { useState } from "react"
import Select from "react-select"

const forRentOptions = [
  { label: "ქირავდება", value: 1 },
  { label: "იყიდიება", value: 0 },
]
const Checkbox = ({ children, ...props }: JSX.IntrinsicElements["input"]) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
)

export default function ForRent({ setSearch }: any) {
  const [isClearable, setIsClearable] = useState(false)
  const [isSearchable, setIsSearchable] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isRtl, setIsRtl] = useState(false)

  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={forRentOptions[0]}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name="color"
      options={forRentOptions}
    />
  )
}
