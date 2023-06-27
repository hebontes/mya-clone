"use client"

import { Fragment, useEffect, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid"
import { cx } from "@/utils/cx"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { SelectOptions } from "@/utils/selectBoxDataTypes"

interface Props {
  boxtitle?: string
  defaultTitle?: string
  param: string
  options: SelectOptions[]
  placeholder?: string
}

const SelectBox = ({
  boxtitle,
  param,
  placeholder,
  defaultTitle,
  options,
}: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // const [selected, setSelected] = useState(options[0])
  const [selected, setSelected] = useState<any>(
    defaultTitle ? defaultTitle : options[0]
  )

  useEffect(() => {
    const value = searchParams.get(param)

    if (value) {
      const option = options.find((option) => {
        return option.value.toString() === value.toString()
      })
      if (option) {
        setSelected(option)
      }
    }
  }, [])

  const onSelect = (param: string, value: string | undefined) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form

    if (!value) {
      current.delete(param)
    } else {
      current.set(param, value)
    }

    // cast to string
    const search = current.toString()
    const query = search ? `?${search}` : ""

    router.push(`/${query}`)
  }
  if (!options) {
    return null
  }

  return (
    <div className="w-full relative leading-none">
      <Listbox
        value={selected}
        onChange={(e) => {
          onSelect(param, e.value)
          setSelected(e)
        }}
      >
        {boxtitle && (
          <div className="text-sm text-black-800 mb-2">{boxtitle}</div>
        )}

        <Listbox.Button className="focus:outline-none relative border border-gray-300 w-full rounded-lg text-left p-3 pr-10 bg-white">
          <span
            className={cx(
              "block truncate text-[13px]",

              defaultTitle === selected ? "text-black-600" : "text-black-900"
            )}
          >
            {defaultTitle === selected ? defaultTitle : selected.label}
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
          <Listbox.Options className="max-h-80 w-full absolute z-10 mt-1 overflow-scroll rounded-lg bg-white py-1 text-base shadow-selectBox ring-1 ring-gray-200 focus:outline-none sm:text-sm">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  cx(
                    "relative cursor-default select-none py-2 px-4 text-sm ",
                    active ? "bg-gray-50 text-black-800" : "text-black-600"
                  )
                }
                value={option}
              >
                {({ selected }) => (
                  <span
                    className={cx(
                      "block",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    {option.label}
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
