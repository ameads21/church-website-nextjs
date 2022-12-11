import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/" style={{ margin: "0px 15px" }}>
        Cedar Hills 12th Ward
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ margin: "0px 15px" }}>
        <Nav className="navbarLinksContainer">
          <Link href="/">Home</Link>
          <Link href="/sacrament">Sacrament</Link>
          <Link href="/contact">Contact</Link>
          <Link target={"_blank"} href="https://chstake.youcanbook.me/">
            Stake Temple Recommend Scheduling
          </Link>
          <Link href="/meet-the-missionaries">Meet the missionaries</Link>
          <Link
            target={"_blank"}
            href="https://www.signupgenius.com/go/9040D4BA4AD2CA4FC1-2022"
          >
            Tithing Declaration
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
