const ProductStickers = () => {
  return (
    <div className="leading-none border-t border-green-150 flex gap-2 bg-green-50 px-4 py-2.5">
      <div
        className="flex items-center gap-1 text-xs rounded-full bg-white"
        style={{ padding: "5px 8px 5px 6px" }}
      >
        <img src="/icons/perfect.svg" alt="checkmark" />
        <span>იდიალურ მდგომარეობაში</span>
      </div>

      <div
        className="flex items-center gap-1 text-xs rounded-full bg-white"
        style={{ padding: "5px 8px 5px 6px" }}
      >
        <img src="/icons/urgent.svg" alt="checkmark" />
        <span>სასწრაფოდ</span>
      </div>

      <div
        className="flex items-center gap-1 text-xs rounded-full bg-white"
        style={{ padding: "5px 8px 5px 6px" }}
      >
        <img src="/icons/history.svg" alt="checkmark" />
        <span>სუფთა ისტორია</span>
      </div>
    </div>
  )
}

export default ProductStickers
