import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"; 
import { AuthContext } from "../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
// import ReactTooltip from "react-tooltip"; 

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-groups">All Groups</NavLink>
      </li>
      <li>
        <NavLink to="/create-group">Create Groups</NavLink>
      </li>
      <li>
        <NavLink to="/my-groups">My Groups</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Logout Success",
                  showConfirmButton: false,
                  timer: 1500,
                });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-xl font-bold" to="/">
          Hobby-Hub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        {user ? (
          <button onClick={handleLogout} className="btn btn-active btn-primary">
            Log Out
          </button>
        ) : (
          <>
            <Link className="btn btn-active btn-primary" to="/login">
              Login
            </Link>
            <Link className="btn btn-active btn-primary" to="/signup">
              Sign Up
            </Link>
          </>
        )}

     
        <div className="relative">
          <div className="avatar avatar-online w-[60px]">
            {user ? (
              <Link>
                
                <img
                  className="rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt="User Photo"
                  //data-tip={user.displayName} // Display username on hover
                />
              </Link>
            ) : null}
          </div>
          {/* ReactTooltip Component */}
          {/* <ReactTooltip place="top" type="dark" effect="float" />  */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
