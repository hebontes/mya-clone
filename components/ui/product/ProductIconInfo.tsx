/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image"

interface Props {
  text: string
  src: string
}
const ProductIconInfo = ({ text, src }: Props) => {
  return (
    <div className="flex items-center gap-3 w-48">
      <img src={src} />
      <div className="text-black-900 text-xs tracking-wide	 font-light	">
        {text}
      </div>
    </div>
  )
}

export default ProductIconInfo
