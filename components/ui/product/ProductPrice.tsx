import React from "react"

const ProductPrice = ({ price_value }: { price_value: any }) => {
  return (
    <div id="product_price ">
      {price_value === 0 ? (
        <span className="text-black-800 text-sm">ფასი შეთანხმებით</span>
      ) : (
        <div className="flex items-center gap-1">
          <div className="text-black-800 text-xl">
            {" "}
            {price_value.toLocaleString()}
          </div>
          <img src="/icons/valute.svg" alt="lari-valute" />
        </div>
      )}
    </div>
  )
}

export default ProductPrice
