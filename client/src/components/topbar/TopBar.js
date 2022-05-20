import './Topbar.css';

export default function TopBar() {
  return (
    <div className="blogTop">
      <div className="blogTopLeft">
        <i className="blogTopIcon fa-brands fa-facebook"></i>
        <i className="blogTopIcon fa-brands fa-twitter"></i>
        <i className="blogTopIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="blogTopCentre"></div>
      <ul className="blogTopList">
        <a href={'/'}><li className="blogTopListItem">Home</li></a>
        <a href={'/forum'}><li className="blogTopListItem">Blog</li></a>
        <a href={'/messages'}><li className="blogTopListItem">Messages</li></a>
        <a href={'/profile'}><li className="blogTopListItem">My Profile</li></a>
      </ul>
      <div className="blogTopRight">
        <img
          className="blogTopImg"
          src="/images/other/Coffee.jpg"
          alt=""
        />
        <i className="blogTopSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
