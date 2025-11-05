import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>iamadmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
            alt=""
            className="icon"
          />
          <span>Jane</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
