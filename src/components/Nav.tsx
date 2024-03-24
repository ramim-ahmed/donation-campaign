import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
export default function Nav() {
  return (
    <nav className="border-b">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="flex lg:flex-row flex-col justify-between items-center py-3">
          <div>
            <img className="w-32" src={logo} alt="" />
          </div>
          <div className="lg:mt-0 mt-3">
            <ul className="flex items-center space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 border-b border-red-500 font-medium"
                      : "font-medium"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 border-b border-red-500 font-medium"
                      : "font-medium"
                  }
                  to="/donation"
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 border-b border-red-500 font-medium"
                      : "font-medium"
                  }
                  to="/statitics"
                >
                  Statitics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
