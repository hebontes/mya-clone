import React from "react"

interface Props {
  text: String
  type?: String
}
const PrimaryButton = ({ text, type }: Props) => {
  return (
    <button className="text-white w-full bg-primaryOrange rounded-md text-sm font-bold py-[9px] flex items-center justify-center leading-none">
      {text}
    </button>
  )
}

export default PrimaryButton
