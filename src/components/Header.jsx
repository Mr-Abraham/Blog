import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logoutbtn } from "./index";

function Header() {
  return (
    <div>
      <header className="flex justify-between p-4 my-1">
        <div>
          <h1>Logo</h1>
        </div>
        <Logoutbtn />
      </header>
    </div>
  );
}

export default Header;
