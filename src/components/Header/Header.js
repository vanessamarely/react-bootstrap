import { Link } from "react-router-dom";
import { Dropdown, Nav } from "react-bootstrap";

import "./Header.scss";

const Header = () => (
  <header className="header">
    <h1 className="header__logo">
      <Link className="link" to="/home">
        My APP
      </Link>
    </h1>
    <Nav className="header__menu" activeKey="/home">
      <Nav.Item>
        <Link className="link" to="/home">
          Home
        </Link>
      </Nav.Item>
    </Nav>
    <Dropdown className="header__user">
      <Dropdown.Toggle id="dropdown-basic">Username</Dropdown.Toggle>

      <Dropdown.Menu className="header__user__menu">
        <Link className="link" to="/profile">
          Profile
        </Link>
        <Link className="link" to="/logout">
          Logout
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  </header>
);
export default Header;
