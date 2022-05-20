import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">Mental Health Awareness</span>
          <img
            src="/images/other/MentalHealthRGB.jpeg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Topics</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Dealing With Harrassment</li>
            <li className="sidebarListItem">Communication for Couples</li>
            <li className="sidebarListItem">Sexual Health & Wellbeing</li>
            <li className="sidebarListItem">Pride Week in Toronto</li>
            <li className="sidebarListItem">Dealing with Loss & Grief</li>
            <li className="sidebarListItem">Coping with Anxiety</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div class="sidebarSocial">
            <i className="sidebarIcon fa-brands  fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
