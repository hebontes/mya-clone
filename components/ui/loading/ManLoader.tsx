import ContentLoader from "react-content-loader"

const ManLoading = () => {
  return (
    <div className="flex-1">
      <ContentLoader
        speed={10}
        width={220}
        height={20}
        viewBox="0 0 220 20"
        backgroundColor="#f3f3f3"
        foregroundColor="#FD410030"
      >
        <rect x="5" y="0" rx="5" ry="5" width="220" height="10" />
      </ContentLoader>
    </div>
  )
}

export default ManLoading
