import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> SHOP
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsGrid1X2Fill className="icon" />  */}
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillArchiveFill className="icon" />  */}
            Settings
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGrid3X3GapFill className="icon" />  */}
            Page
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsPeopleFill className="icon" />  */}
            Menu
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsListCheck className="icon" />  */}
            Language
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsMenuButtonWideFill className="icon" />  */}
            News
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Team Member
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Slider
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Testimonial
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Partner
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Service
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            FAQ
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Photo & Video
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            File Upload (Media)
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Social Media
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            {/* <BsFillGearFill className="icon" />  */}
            Subscriber
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
