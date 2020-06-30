import React from "react";
import "./Footer.css";

function Footer(props){
    const { user } = props;
    return (
      <div className="Footer">
        <div className="title">
          <h1>Tạo bài viết</h1>
        </div>
        <div className="content">
          {
            <div key="1" className="item">
              <img alt="" src={user.avatarUrl} />
              <input
                type="text"
                placeholder={"Anh " + user.name + " ơi, anh đang nghĩ gì thế?"}
              />
            </div>
          }
          <div className="status">
            <button type="button" className="btn btn-secondary">
              <img
                alt=""
                src="https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2Fpicture%20(1)%201.png?v=1592985493108"
              />
              <span>Ảnh/Video</span>
            </button>
            <button type="button" className="btn btn-secondary">
              <img
                alt=""
                src="https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2FuserTag%201.png?v=1592985478926"
              />
              <span>Gắn thẻ bạn bè</span>
            </button>
            <button type="button" className="btn btn-secondary">
              <img
                alt=""
                src="https://cdn.glitch.com/aecd2dc9-8ef0-4e59-b56e-e65d6e268fc0%2FhappyIcon%201.png?v=1592985477323"
              />
              <span>Cảm xúc/...</span>
            </button>
            <button type="button" className="btn btn-secondary">
              <span>...</span>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Footer;
