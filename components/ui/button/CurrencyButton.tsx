"use client"
import React, { useState } from "react"

const CurrencyButton = () => {
  const [isLari, setIsLari] = useState(true)
  const src = isLari ? "lari=yes" : "lari=no"
  return (
    <div className="cursor-pointer" onClick={() => setIsLari(!isLari)}>
      <img src={`/icons/${src}.svg`} alt="currency" />
    </div>
  )
}

export default CurrencyButton
