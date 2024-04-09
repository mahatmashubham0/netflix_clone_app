import React, { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "../index.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div class="relative ...">
      <BackgroundImage />
      <div class="absolute top-0 left-0 ... w-full back-image background-image">
        <Header />
        <div className="flex flex-col items-center justify-center  h-[89.1vh] gap-4">
          <h1 className="text-white text-[1.5rem] md:text-[2.5rem] font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-white text-[1rem] md:text-[1.5rem] font-semibold">
            Watch anywhere. Cancel anytime.
          </h2>
          <h4 className="text-white text-[0.75rem] md:text-[1rem]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div className="form flex md:flex-row flex-col md:w-[50%] w-[100%] justify-center items-center ">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="justify-center items-center px-[1rem] py-[0.75rem] w-[50%] rounded-md border-2 border-gray-600 bg-transparent"
            />

            {showPassword && (
              <input type="password" placeholder="Password" name="password" 
              className="justify-center mx-[0.75rem] items-center px-[1rem] py-[0.75rem] w-[50%] rounded-md border-2 border-gray-600 bg-transparent"
              />
            )}

            {!showPassword && (
              <button onClick={()=>setShowPassword(true)} className="mx-4 text-white flex items-center my-4 justify-center w-[30%] sm:w-[35%] md:w-[25%]  font-bold text-[1rem] px-[1rem] py-[0.75rem]  rounded-md bg-red-500">
                Get Started
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-mirrorinrtl="true"
                  class="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="ChevronRight"
                  aria-labelledby=":r3:"
                  aria-hidden="true"
                  className="text-2xl"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
