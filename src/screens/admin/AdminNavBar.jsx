import React from "react";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav className="mb-5 flex flex-wrap items-center justify-between w-full text-lg text-gray-700">
      <img
        src="../images/logo.jpg"
        className="mt-6 ml-20 w-60 pt-3 hover:scale-110"
        alt="logo"
      />
      <ul className="px-28 py-4 flex space-x-6 justify-end">
        <Link to="/userlist">
          <li className="cursor-pointer mt-14 font-bold text-xl hover:scale-110">
            User List
          </li>
        </Link>
        <Link to="/itemlist">
          <li className="cursor-pointer mt-14 font-bold text-xl hover:scale-110">
            Biryani List
          </li>
        </Link>
        <Link to="/additem">
          <li className="cursor-pointer mt-14 font-bold text-xl hover:scale-110">
            Add Items
          </li>
        </Link>
        <Link to="/orders">
          <li className="cursor-pointer mt-14 font-bold text-xl hover:scale-110">
            Order List
          </li>
        </Link>
        <Link to="/">
          <li
            className="cursor-pointer mt-14 font-bold text-xl hover:scale-110"
            // onClick={(global.flag = false)}
          >
            Log out
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
