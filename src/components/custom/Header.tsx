import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { GrSchedulePlay } from "react-icons/gr";
import useAuthContext from "@/hooks/useAuthContext";
import ClearLocalStorage from "@/helpers/ClearLocalStorage";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated,token } = useAuthContext();
  console.log(token);

  const handleLogout = () => {
    ClearLocalStorage();
    window.location.reload()
  };
  return (
    <header className="bg-darkblue fixed w-full left-0 top-0">
      <nav className="container mx-md-auto flex items-center justify-between px-4 py-8">
        <NavLink to="/" className="flex items-center justify-center gap-2">
          <GrSchedulePlay className="text-brightred w-6 h-6" />
          <h1 className="text-2xl text-white font-bold tracking-widest">
            FindYourGuide
          </h1>
        </NavLink>

        <ul className="flex justify-center items-center gap-6">
          <li>
            <NavLink
              to="/"
              className="text-smoothpink font-bold text-sm tracking-wide"
            >
              How does it work?
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-smoothpink font-bold text-sm tracking-wide"
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-smoothpink font-bold text-sm tracking-wide"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <div className="pl-4 flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Button
                    variant="outline"
                    className="bg-transparent text-white hover:text-brightred rounded-full px-6 border-2"
                    onClick={() => navigate("/dashboard/profile")}
                  >
                    Dashboard
                  </Button>
                  <Button
                    className="bg-brightred hover:bg-white hover:text-brightred rounded-full px-6"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="bg-transparent text-white hover:text-brightred rounded-full px-6 border-2"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-brightred hover:bg-white hover:text-brightred rounded-full px-6"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
