import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutuser } from "./Featurs/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutuser());
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"}>
            <span className="navbar-brand mb-0 h1 text-decoration-none">
              Auth-App
            </span>
          </Link>

          <span className="navbar-brand mb-0 h1">
            {!user ? (
              <>
                <Link to={"/Register"} className="btn btn-sm btn-success mx-1">
                  Register
                </Link>
                <Link to={"/Login"} className="btn btn-sm btn-warning mx-1">
                  Login
                </Link>
              </>
            ) : (
              <Link
                to={"/Login"}
                className="btn btn-sm btn-danger mx-1"
                onClick={handleLogout}
              >
                Logout
              </Link>
            )}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
