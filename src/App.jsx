import authService from "./auth/auth";
import { Footer, Header } from "../src/components/index";
import { login, logout } from "./store/authSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  }, []);

  if (!loading) {
    return (
      <div className="bg-green-200">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <h1> Loading..................</h1>
      </div>
    );
  }
}

export default App;
