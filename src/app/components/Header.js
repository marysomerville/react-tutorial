import React from "react";
//stateless component
export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">{props.projectTitle}</a>
        </div>
        <div className="navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">User</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
