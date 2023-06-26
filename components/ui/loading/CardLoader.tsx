import ContentLoader from "react-content-loader"

const CardLoader = (props: any) => (
  <ContentLoader
    speed={3}
    width={780}
    height={172}
    viewBox="0 0 780 172"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
    <rect x="15" y="15" rx="16" ry="16" width="274" height="140" />
    <rect x="305" y="16" rx="8" ry="8" width="274" height="20" />
    <rect x="305" y="64" rx="8" ry="8" width="274" height="20" />
  </ContentLoader>
)

export default CardLoader
