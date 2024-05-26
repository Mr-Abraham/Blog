import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logoutbtn, Container } from "./index";

function Header() {
  const authstatus = useSelector((state) => state.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      path: "/",
      active: true,
    },
    {
      name: "Login",
      path: "/login",
      active: !authstatus,
    },
    {
      name: "Sign Up",
      path: "/signup",
      active: !authstatus,
    },
    {
      name: "About",
      path: "/about",
      active: authstatus,
    },
    {
      name: "Contact",
      path: "/contact",
      active: authstatus,
    },
    {
      name: "About",
      path: "/about",
      active: authstatus,
    },
    {
      name: "All Posts",
      path: "/all-posts",
      active: authstatus,
    },
  ];
  return (
    <div>
      <header className="flex justify-between p-4 my-1">
        <Container>
          <nav className="flex justify-between items-center">
            <div>
              <h1>Logo</h1>
            </div>
            <ul className="flex justify-between items-center gap-5">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      className="p-2 font-semibold text-red-300"
                      onClick={() => navigate(item.path)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              {authstatus && <Logoutbtn />}
            </ul>
          </nav>
        </Container>
      </header>
    </div>
  );
}

export default Header;
