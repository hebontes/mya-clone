import { cx } from "@/utils/cx"

const ProductIsGanbajebuli = ({
  customs_passed,
}: {
  customs_passed: boolean
}) => {
  return (
    <div
      className={cx(
        "md:p-0 p-1 rounded-md",
        customs_passed
          ? "text-green-300 bg-green-50 md:bg-transparent"
          : "text-red-800 bg-red-100 md:bg-transparent "
      )}
    >
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
