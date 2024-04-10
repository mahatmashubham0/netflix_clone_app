import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { fireBaseAuth } from "../utils/firebase";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

const SignIn = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const handlerLogin = async () => {
    try {
      const { email, password } = formValue;
      await signInWithEmailAndPassword(fireBaseAuth, email, password);
      formValue.email = "";
      formValue.password = "";
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  onAuthStateChanged(fireBaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return (
    <div class="relative ...">
      <BackgroundImage />
      <div class="absolute top-0 left-0 ... w-[100vw] back-image background-image">
        <Header />
        <div className="w-[100%] h-[89.1vh] flex justify-center items-center">
          <div className="border border-black w-[70%] h-[50%] md:w-[45%] md:h-[60%] py-8 back-image background-image">
            <h3 className="text-center my-4 text-white font-bold ">Login User</h3>
            <div className="flex justify-center items-center flex-col">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue((formValues) => ({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  }))
                }
                className=" text-white justify-center items-center px-[1rem] py-[0.75rem] w-[50%] rounded-md border-2 border-gray-600 bg-transparent"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="text-white justify-center my-4 mx-[0.75rem] items-center px-[1rem] py-[0.75rem] w-[50%] rounded-md border-2 border-gray-600 bg-transparent"
                value={formValue.password}
                onChange={(e) =>
                  setFormValue((formValues) => ({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <button
                className="mx-4 text-white font-bold text-[0.75rem] md:text-[1rem] px-[0.75rem] md:px-[1.25rem] rounded-md py-[0.75rem] bg-red-500"
                onClick={handlerLogin}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
