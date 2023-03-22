import { LogoutLink } from "./LogoutLink";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <header>
      {/* <nav>
        <a href="/">Home</a> | <a href="/login">Login</a> | <a href="/signup">Signup</a> |{" "}
        <a href="/kids/new">Add Kid</a> | <a href="/family_trees">My Family Tree</a> | <a href="/kids/new">Add Kid</a>{" "}
        <LogoutLink />
      </nav> */}
      <Navbar className="color-nav">
        <Container>
          <Navbar.Brand href="/">Milestones</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Kids</Nav.Link>
            <Nav.Link href="/kids/new">Add new Kid</Nav.Link>
            <Nav.Link href="/family_trees">Family Tree</Nav.Link>

            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <LogoutLink />
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
