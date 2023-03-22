import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      {/* <nav>
        <a href="/">Home</a> | <a href="/login">Login</a> | <a href="/signup">Signup</a> |{" "}
        <a href="/kids/new">Add Kid</a> | <a href="/family_trees">My Family Tree</a> | <a href="/kids/new">Add Kid</a>{" "}
        <LogoutLink />
      </nav> */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">
          Milestones
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/">
              Home
            </a>
            <a class="nav-item nav-link" href="/login">
              Login
            </a>
            <a class="nav-item nav-link" href="/signup">
              Signup
            </a>
            <a class="nav-item nav-link" href="/family_trees">
              Family Tree
            </a>
            <a class="nav-item nav-link">
              <LogoutLink />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
