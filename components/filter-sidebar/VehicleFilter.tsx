import { cx } from "@/utils/cx"
import { vehichleOptionsTypes } from "@/utils/data"
import Image from "next/image"

export default function VehicleFilter({
  alt,
  img,
  active,
}: vehichleOptionsTypes) {
  return (
    <div
      className={cx(
        "py-2 px-2.5 h-12 relative border-b",
        active ? "bg-white" : "bg-whiteMuted",
        active ? "border-primaryOrange" : "border-gray-100"
      )}
    >
      <Image src={img} alt={alt} fill className="py-2 px-auto" />
    </div>
  )
}
