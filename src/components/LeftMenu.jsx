import { Link } from "react-router-dom";
import { links } from "../utilities/links";
const LeftMenu = () => {
  return (
    <section className=" flex flex-col   flex-[2] h-[calc(100vh-118px)]">
      <section className=" flex mx-3  py-1 items-center justify-between px-3 bg-customPruple">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.9}
          stroke="currentColor"
          className="w-5 h-5 font-extrabold text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>

        <span className="text-white">sports</span>
      </section>
      {links.map((item, ind) => (
        <section
          key={ind}
          className="flex shadow-sm text-md mx-3 border-b  hover:bg-slate-200 px-3  py-1 items-center bg-gray justify-between"
        >
          <Link className=" text-indigo-950 grow" to={`/${item}`}>
            <pre> {item}</pre>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-lime-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </section>
      ))}
    </section>
  );
};

export default LeftMenu;
