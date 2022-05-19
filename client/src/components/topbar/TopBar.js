import './Topbar.css';

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i className="topIcon fa-brands  fa-facebook"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCentre"></div>
      <ul className="topList">
        <li className="topListItem">Home</li>
        <li className="topListItem">Blogs</li>
        <li className="topListItem">Therapist Info</li>
        <li className="topListItem">Chat Forum</li>
      </ul>
      <div className="topRight">
        <img 
        className="topImg"
        src="/images/other/background1.webp" 
        alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
