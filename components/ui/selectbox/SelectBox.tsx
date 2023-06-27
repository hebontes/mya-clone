"use client"

interface Props {
  boxtitle: String
  placeholder?: String
  options?: any[]
}
// const SelectBox = ({ boxtitle, placeholder, options }: Props) => {
//   return (
//     <div>
//       <div className="text-sm text-black-800 mb-2">{boxtitle}</div>
//       <select className="w-full">
//         <option value="someOption">Some option</option>
//         <option value="otherOption">Other option</option>
//       </select>
//     </div>
//   )
// }

// export default SelectBox

import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid"
import { cx } from "@/utils/cx"

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
]

const SelectBox = ({ boxtitle, placeholder, options = people }: Props) => {
  const [selected, setSelected] = useState(options[0])

  return (
    <div className="w-full relative leading-none">
      <Listbox value={selected} onChange={setSelected}>
        <div className="text-sm text-black-800 mb-2">{boxtitle}</div>

        <Listbox.Button className="focus:outline-none relative border border-gray-300 w-full rounded-lg text-left p-3">
          <span className={cx("block truncate text-[13px]", "text-black-600")}>
            {selected.name}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-4 w-4 text-black-600"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transitionduration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <Listbox.Options className="absolute z-10 mt-1 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-selectBox ring-1 ring-gray-200 focus:outline-none sm:text-sm">
            {options.map((person, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  cx(
                    "relative cursor-default select-none py-2 px-4 text-sm",
                    active ? "bg-gray-50 text-black" : "text-black-600"
                  )
                }
                value={person}
              >
                {({ selected }) => (
                  <span
                    className={cx(
                      "block truncate",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    {person.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}

export default SelectBox
