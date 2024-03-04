import { links } from "../utilities/links";
import { NavLink } from "react-router-dom";
import mainlogo from "../assets/mainlogo.png";

const Header = () => {
  return (
    <header className="  bg-customPruple p-0 justify-between h-28 w-full flex flex-col">
      <section className="flex   px-3 justify-between items-center">
        <section className="flex gap-5  items-center">
          <img src={mainlogo} alt="logo" className="w-44 h-20" />
          <section className="flex border rounded-md px-1 justify-between items-center bg-white gap-2  border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input type="text" placeholder="search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </section>
        </section>
        <section className="flex gap-3">
          <input
            type="text"
            className="rounded-sm px-2"
            placeholder="username"
          />
          <input
            type="password"
            className="rounded-sm px-2"
            placeholder="password"
          />
          <button className=" flex justify-center items-center bg-gradient-to-r from-orange-600 to-orange-400  rounded text-white px-3">
            login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[15px] h-[15px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
          </button>
        </section>
      </section>
      <section className="flex border-t border-white bg-gradient-to-b py-1 from-orange-500 to-orange-300 m-0 justify-start items-center gap-4">
        {links.map((ite, ind) => {
          if (ind == 0) {
            return (
              <span className=" px-2 border-r border-gray-500">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white" : "no-underline text-black"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </span>
            );
          }
          return (
            <span className="border-r  px-2  border-gray-500">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-white" : "no-underline text-black"
                }
                to={`/${ite}`}
              >
                {ite}
              </NavLink>
            </span>
          );
        })}
      </section>
    </header>
  );
};

export default Header;
