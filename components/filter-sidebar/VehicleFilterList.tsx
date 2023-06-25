"use client"

import { useState } from "react"
import VehicleFilter from "./VehicleFilterItem"
import { vehichleOptions } from "@/utils/data"

const VehicleFilterList = () => {
  const [active, setActive] = useState<number>(0)
  return (
    <div className="rounded-t-xl overflow-hidden w-full grid grid-cols-3 divide-x divide-gray-100 ">
      {vehichleOptions.map((vehicle, idx) => (
        <VehicleFilter
          key={vehicle.id}
          alt={vehicle.alt}
          src={vehicle.src}
          isActive={idx === active}
          setActiveTab={() => setActive(idx)}
        />
      ))}
    </div>
  )
}

export default VehicleFilterList
