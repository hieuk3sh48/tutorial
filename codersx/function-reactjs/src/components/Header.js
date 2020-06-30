import React from "react";
import "./Header.css";

function Header(){
    return (
      <div className="Header">
        <div className="setting">
          <h1>Bài viết</h1>
          <div className="button">
            <button type="button" className="btn btn-secondary">
              <img
                alt=""
                className="icon"
                src="https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2Fsettings.svg?v=1592964495501"
              />
              <span>Bộ lọc</span>
            </button>
            <button type="button" className="btn btn-secondary">
              <img
                alt=""
                className="icon"
                src="https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2Fsettings.svg?v=1592964495501"
              />
              <span>Quản lý bài viết</span>
            </button>
          </div>
        </div>

        <div className="menu">
          <div className="submenu">
            <i className="fa fa-bars" aria-hidden="true" />
            <span>Xem theo danh sách</span>
          </div>
          <div className="submenu">
            <i className="fa fa-th-list" aria-hidden="true" />
            <span>Xem theo danh sách</span>
          </div>
        </div>
      </div>
    );
}

export default Header;
