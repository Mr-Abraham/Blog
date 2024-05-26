import { useDispatch } from "react-redux";
import { Inpu, Button } from ".//index";
import { useNavigate } from "react-router-dom";
import { login as storeLogin } from "../store/authSlice";
import authService from "../auth/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { Input } from "postcss";

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const signup = async (data) => {
    setError("");
    try {
      const userdata = await authService.CreateAccount(data);
      if (userdata) {
        const userData = await authService.getUser();
        if (userData) {
          dispatch(storeLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
      </div>
      <form action="" onSubmit={handleSubmit(signup)}>
        <Input
          label="Name"
          type="text"
          placeholder="Enter Your Name"
          {...register("name", {
            required: true,
          })}
        />
        <Input
          type="email"
          label="Email :"
          placeholder="Enter your email"
          {...register("email", {
            required: true,
          })}
        />
        <Input
          type="password"
          label="Password"
          placeholder="enter your password"
          {...register("password", {
            required: true,
          })}
        />
        <Button type="submit" className="w-full text-blue-400">
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default Signup;
