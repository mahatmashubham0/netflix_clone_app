import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fireBaseAuth } from "../utils/firebase";
import "../index.css";

const Navbar = () => {
  const myLink = [
    { name: "Home", link: "/" },
    { name: "TV Show", link: "/tvshow" },
    { name: "Movies", link: "/movies" },
    { name: "MyList", link: "/mylist" },
  ];

  //   const [searchtext , setsearchtext] = useState();
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const navigate = useNavigate();
  onAuthStateChanged(fireBaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center justify-between gap-8  mx-16">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
          className="w-32"
        />
        <ul className="text-black font-semibold hidden items-center md:flex justify-center gap-8">
          {myLink.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mx-16 flex justify-center items-center gap-4">
        <div
          className={` items-center justify-center flex rounded-md ${
            showSearch ? "show-search" : ""
          }`}
        >
          <button
            className="mx-2 text-black font-semibold"
            onFocus={() => {
              setShowSearch(true);
            }}
            onBlur={
              // it means when we dont focus on botton that time this onblur running
              () => {
                if (!inputHover) setShowSearch(false);
              }
            }
          >
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search"
            name="search"
            onMouseEnter={() => setInputHover(true)}
            onMouseLeave={() => setInputHover(false)}
            onBlur={() => {
              setInputHover(false);
              setShowSearch(false);
            }}
            className=" text-white transition-all invisible hidden opacity-0 justify-center mx-1 border-none outline-none items-center px-[0.50rem] py-[0.25rem] rounded-md bg-transparent"
          />
        </div>
        <button
          className="text-red-500"
          onClick={() => {
            signOut(fireBaseAuth);
          }}
        >
          <FaPowerOff />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
