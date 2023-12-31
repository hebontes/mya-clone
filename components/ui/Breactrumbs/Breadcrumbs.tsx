import { cx } from "@/utils/cx"
import Link from "next/link"

const Breadcrumbs = () => {
  // Last one is considered active (current page)
  const visitedPages = ["მთავარი", "ძიება", "იყიდება"]

  return (
    <div className="mt-8 mb-5 ml-5 md:ml-0 text-xs text-black-600">
      {visitedPages.map((page, idx) => {
        const isLast = idx === visitedPages.length - 1

        return (
          <div className="inline-block" key={page}>
            <Link
              href="#"
              className={cx("cursor-pointer", isLast && "text-primaryOrange")}
            >
              {page}
            </Link>
            {!isLast && <span className="mx-1">{">"}</span>}
          </div>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
