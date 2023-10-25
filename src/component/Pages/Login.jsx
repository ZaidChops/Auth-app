import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../Featurs/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const {user,isSuccess,isError,message} = useSelector(state => state.auth)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const handleLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  useEffect(()=>{
    if(user || isSuccess){
      navigate("/")
    }

    if(isError){
      toast.error(message)
    }
  },[user,isError,message])

  return (
    <>
      <h1 className="display-4 text-center">Login</h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          type="Email"
          placeholder="Email"
          className="form-control rounded-0 my-2"
          required
          name="email"
          value={email}
          onChange={handleLogin}
        />
        <input
          type="Password"
          placeholder="Password"
          className="form-control rounded-0 my-2"
          required
          name="password"
          value={password}
          onChange={handleLogin}
        />
        <button className="btn btn-success small w-100 rounded-0">Login</button>
      </form>
    </>
  );
};

export default Login;
