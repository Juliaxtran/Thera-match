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
        <li className="blogTopListItem">Home</li>
        <li className="blogTopListItem">Blogs</li>
        <li className="blogTopListItem">Therapist Info</li>
        <li className="blogTopListItem">Chat Forum</li>
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
