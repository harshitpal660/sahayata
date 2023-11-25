import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <div class="navbar-brand">
        <Link to={"/"}>Sahayata</Link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <div class="nav-link">
              <Link to={"/"}>Home</Link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <Link to={"/loginpage"}>Login</Link>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <Link to={"/signuppage"}>Signup</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
