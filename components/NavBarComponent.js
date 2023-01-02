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
          <Link
            target={"_blank"}
            rel="noreferrer"
            href="https://chstake.youcanbook.me/"
          >
            Stake Temple Recommend Scheduling
          </Link>
          <Link href="/meet-the-missionaries">Meet the missionaries</Link>
          <Link
            target={"_blank"}
            rel="noreferrer"
            href="https://www.signupgenius.com/go/9040D4BA4AD2CA4FC1-2022"
          >
            Tithing Declaration
          </Link>
          <Link
            target={"_blank"}
            rel="noreferrer"
            href="https://docs.google.com/spreadsheets/d/1pO-nT_GhQ6jxPnFW3CdfSMQ4beYirMl_/edit?usp=sharing&ouid=106043516097173347588&rtpof=true&sd=true"
          >
            Church Cleaning Schedule
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarComponent;
