import { cx } from "@/utils/cx"
import { vehichleOptionsTypes } from "@/utils/data"
import Image from "next/image"

interface Props {
  isActive: boolean
  setActiveTab: any // function
}
export default function VehicleFilterItem({
  alt,
  src,
  isActive,
  setActiveTab,
}: vehichleOptionsTypes & Props) {
  return (
    <div
      onClick={setActiveTab}
      className={cx(
        "transition-all ease duration-300 py-2 px-2.5 h-12 relative border-b",
        isActive
          ? "!border-b-primaryOrange  bg-white"
          : "bg-whiteMuted border-b-gray-100"
      )}
    >
      <Image
        src={`${src}${isActive ? "-active" : ""}.svg`}
        alt={alt}
        fill
        className="py-2 px-auto fill-white	fill:text-primaryOrange  text-primaryOrange"
        style={{ color: "#ffffff" }}
      />
    </div>
  )
}
