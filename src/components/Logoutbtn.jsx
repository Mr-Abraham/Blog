import { useDispatch } from "react-redux";
import authService from "../auth/auth";
import { logout } from "../store/authSlice";

function Logoutbtn() {
  const dispatch = useDispatch();
  const logoutHanlder = () => {
    authService.logOut().then(() => dispatch(logout()));
  };

  return (
    <div>
      <button
        className="border px-4 py-1 rounded-md bg-black text-white hover:bg-red-900"
        onClick={logoutHanlder}
      >
        Logout
      </button>
    </div>
  );
}

export default Logoutbtn;
