import './header.css';

export default function Header() {
  return (
    <div className="blogHeader">
      <div className="blogHeaderTitles">
        <span className="blogHeaderTitlesLg">Thera-Match</span>
        <span className="blogHeaderTitlesSm">Blog</span>
      </div>
      <img
        className="blogHeaderImg"
        src="/images/other/background3.webp"
        alt=""
      />
    </div>
  )
}
