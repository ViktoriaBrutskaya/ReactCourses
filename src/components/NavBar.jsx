import React, { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../context"

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () =>{
    localStorage.clear();
    setIsAuth(false)
  }
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/galery'>Galery</Link></li>
        <li><Link to='/list'>List</Link></li>
        <li><Link to='/slider'>Slider</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <a className="waves-effect waves-light btn" onClick={() => setIsAuth(false)}>
          <i className="material-icons right">exit_to_app</i>
          Log out
        </a>
      </ul>
    </div>
  </nav>

  );
}
export default NavBar;
