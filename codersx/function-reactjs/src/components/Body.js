import React from "react";
import "./Body.css";
import PropTypes from "prop-types";

function Body(props){
    const { users } = props;

    return (
      <div className="Body">
        <div className="title">
          <h1>Gợi ý cho bạn</h1>
          <button>Xem tất cả</button>
        </div>
        <div className="content">
          {users.map((user, index) => (
            <div key={index} className="item">
              <img alt="" src={user.avatarUrl} />
              <div className="text">
                <p className="name">{user.name}</p>
                <p className="recomment">Gợi ý cho bạn</p>
              </div>
              <a>Theo dõi</a>
            </div>
          ))}
        </div>
      </div>
    );
}

Body.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatarUrl: PropTypes.string
    })
  )
};

export default Body;
