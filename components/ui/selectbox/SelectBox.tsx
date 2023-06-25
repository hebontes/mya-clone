"use client"
import React from "react"

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

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
]

export default function SelectBox({ boxtitle, placeholder, options }: Props) {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="w-full relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="text-sm text-black-800 mb-2">{boxtitle}</div>

        <Listbox.Button className="text-sm relative border w-full rounded-lg text-left p-3">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  )
}
