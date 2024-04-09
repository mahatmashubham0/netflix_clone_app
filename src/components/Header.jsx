import React from "react";

const Header = () => {
  return (
    <div className="flex justify-around items-center my-4 ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
        className="md:w-[11rem] w-24"
      />
      <div className="flex items-center">
        <select
          id=":R5ajalalbd:"
          name="LanguageSelect"
          data-uia="language-picker-header"
          className="border px-6 py-2 rounded-md"
        >
          <option lang="en" label="English" value="en-IN" selected="" >
            English
          </option>
          <option lang="hi" label="हिन्दी" value="hi-IN">
            हिन्दी
          </option>
        </select>
        <button className="mx-4 text-white font-bold text-[0.75rem] md:text-[0.75rem] px-[0.75rem] md:px-[1.25rem] rounded-md py-[0.75rem] bg-red-500">Login In</button>
      </div>
    </div>
  );
};

export default Header;
