import React from "react"
import { cx } from "@/utils/cx"
import Link from "next/link"

const Breadcrumbs = () => {
  const pageData = ["მთავარი", "ძიება", "იყიდება"]

  return (
    <div className="mt-8 mb-5 text-xs text-black-600">
      {pageData.map((page, idx) => {
        const isLast = idx === pageData.length - 1
        return (
          <>
            <Link
              href="#"
              key={idx}
              className={cx("cursor-pointer", isLast && "text-primaryOrange")}
            >
              {page}
            </Link>
            {!isLast && <span className="mx-1">{">"}</span>}
          </>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
