import React from "react"
import { cx } from "@/utils/cx"

const ProductIsGanbajebuli = ({
  customs_passed,
}: {
  customs_passed: boolean
}) => {
  return (
    <div className={cx(customs_passed ? "text-green-300" : "text-red-800")}>
      {customs_passed ? (
        <div className="flex items-center gap-0.5">
          <img src="/icons/checkbox.svg" alt="checkmark" />
          განბაჟებული
        </div>
      ) : (
        // ver vipove product data - shi ganbajebis property
        "განბაჟება 1,000 ₾"
      )}
    </div>
  )
}

export default ProductIsGanbajebuli
