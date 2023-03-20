import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="/login">Login</a> | <a href="/signup">Signup</a> |{" "}
        <a href="/kids/new">Add Kid</a> | <LogoutLink />
      </nav>
    </header>
  );
}
