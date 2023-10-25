import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registeruser } from "../Featurs/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("PASSWORD NOT MATCH !");
    } else {
      dispatch(registeruser(formData));
    }
  };

  useEffect(() => {
    if(user || isSuccess){
      navigate("/")
    }

    if(isError){
      toast.error(message)
    }
    
  }, [user,isError,message]);

  return (
    <>
      <h1 className="display-4 text-center">Register </h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control rounded-0 my-2"
          required
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="Email"
          placeholder="Email"
          className="form-control rounded-0 my-2"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="Password"
          placeholder="Password"
          className="form-control rounded-0 my-2"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="Password"
          placeholder="Conferm Password"
          className="form-control rounded-0 my-2"
          required
          name="password2"
          value={password2}
          onChange={handleChange}
        />
        <button className="btn btn-success small w-100 rounded-0">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
