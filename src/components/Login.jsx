import React, { useState } from "react";
import { Button, Input } from "./index";
import authService from "../auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../store/authSlice";
import { Form, useForm } from "react-hook-form";
import { data } from "autoprefixer";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
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
      <div className="flex items-center justify-center w-full">
        <div className="mx-auto bg-gray-500"></div>
        <h2 className="text-2xl">Sign In</h2>
        <p>
          Dont't have An Account !! <Link to={"/signup"}>Sign UP</Link>
        </p>
        <div>{error && <p className="text-red-600">{error}</p>}</div>
        <form action="" onSubmit={handleSubmit(login)}>
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
          <Button type="submit" className="text-blue-400">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
