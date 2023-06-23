import React, { Children, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import book from "../../assets/book.svg";
import user from "../../assets/user-solid.svg";
import calendar from "../../assets/calendar.svg";
import logoOpen from "../../assets/long-logo.svg";
import logoClose from "../../assets/only-logo.png";
import santri from "../../assets/user-group.svg";
import logout from "../../assets/logout.svg";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toogle = () => setIsOpen(!isOpen);
  const navPage = [
    {
      path: "/profile",
      name: "Profile",
      icon: user,
    },
    {
      path: "/kurikulum",
      name: "Kurikulum",
      icon: book,
    },
    {
      path: "/presensi",
      name: "Presensi",
      icon: calendar,
    },
    {
      path: "/data-santri",
      name: "Data Santri",
      icon: santri,
    },
  ];

  const logo = isOpen ? logoOpen : logoClose;
  const openClose = isOpen
    ? "fixed z-[2] rounded-r-[30px] h-screen pt-10 bg-[#008C74] shadow-[4px_0px_5px_1px_rgba(0,0,0,0.25)]"
    : "fixed h-screen pt-10 bg-[#008C74] shadow-[4px_0px_5px_1px_rgba(0,0,0,0.25)]";
  const activeLink = "bg-[#007763]";
  const normalLink = "";
  return (
    <div className="">
      <div
        style={{ width: isOpen ? "max-content" : "max-content" }}
        className={openClose}
      >
        <div className={isOpen ? "mx-1.5 w-[210px] pr-3" : "mx-1.5 w-[70px]"}>
          <img src={logo} onClick={toogle} />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="w-full mt-10 text-white text-xl font-bold grid overflow-hidden">
            {navPage.map((nav, index) => {
              return (
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  key={index}
                >
                  <div
                    className={
                      isOpen
                        ? "flex items-center px-[29px] h-14"
                        : "flex justify-center items-center hover:bg-[#007763] h-14"
                    }
                  >
                    <img src={nav.icon} className="w-6" />
                    <p
                      className={
                        isOpen
                          ? "flex items-center w-full h-full px-4"
                          : "hidden"
                      }
                    >
                      {nav.name}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={
                        isOpen
                          ? "w-[90%] border-b border-[rgba(255,255,255,0.25)]"
                          : "w-[70%] border-b border-[rgba(255,255,255,0.25)]"
                      }
                    />
                  </div>
                </NavLink>
              );
            })}
          </div>
          <Link to="">
            <div
              className={
                isOpen
                  ? "flex items-center px-[29px] mb-20 hover:bg-[#007763] h-14"
                  : "flex justify-center items-center px-5 mb-20 hover:bg-[#007763] h-14"
              }
            >
              <img src={logout} className="w-6" />
              <p
                className={
                  isOpen
                    ? "flex items-center w-full h-full px-4 text-white text-xl font-bold"
                    : "hidden"
                }
              >
                Logout
              </p>
            </div>
          </Link>
        </div>
      </div>

      <main className="w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
