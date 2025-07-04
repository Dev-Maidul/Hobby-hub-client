import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import { MdDarkMode } from "react-icons/md";
import { toggleTheme } from "../Scripts/script";
import { CiLight } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

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
      .catch((error) => console.log(error));
  };

  const handleTheme = () => {
    setDark(!dark);
    toggleTheme();
  };

  const links = (
    <>
      <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
      <li><NavLink to="/all-groups" onClick={() => setMenuOpen(false)}>All Groups</NavLink></li>
      <li><NavLink to="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/create-group" onClick={() => setMenuOpen(false)}>Create Groups</NavLink></li>
          <li><NavLink to="/my-groups" onClick={() => setMenuOpen(false)}>My Groups</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="relative z-50">
      {/* Sticky navbar */}
      <div className="sticky top-0 bg-[#f3f4f6] shadow w-full">
        <nav className="w-10/12 mx-auto flex items-center justify-between px-4 py-2">
          {/* Left */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="h-6 w-6 text-[#4F2FFB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link to="/" className="text-xl font-bold hidden md:block text-[#232B3A]">Hobby-Hub</Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex gap-4 font-semibold text-[#232B3A]">{links}</ul>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button onClick={handleTheme}>
              {dark ? <CiLight size={26} /> : <MdDarkMode size={26} />}
            </button>
            {user ? (
              <>
                <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
                <Link to="/dashboard"><button className="btn btn-primary">Dashboard</button></Link>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/signup" className="btn btn-primary">Sign Up</Link>
              </>
            )}
            {user && (
              <Link>
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                  data-tooltip-id="user-tooltip"
                  data-tooltip-content={user?.displayName || "User"}
                />
              </Link>
            )}
          </div>
          <Tooltip id="user-tooltip" place="bottom" effect="solid" />
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-[#f3f4f6] shadow-md">
          <ul className="flex flex-col p-4 gap-2 font-semibold text-[#232B3A]">
            {links}
            <li>
              {user ? (
                <>
                  <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="btn btn-primary w-full">Log Out</button>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}><button className="btn btn-primary w-full">Dashboard</button></Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setMenuOpen(false)} className="btn btn-primary w-full">Login</Link>
                  <Link to="/signup" onClick={() => setMenuOpen(false)} className="btn btn-primary w-full">Sign Up</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;