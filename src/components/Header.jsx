import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          height="30"
          className="d-inline-block align-top"
        />
        React Fundamentals #5
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="Header-user-name">Maksim</Navbar.Text>
        <Button variant="outline-warning">Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
