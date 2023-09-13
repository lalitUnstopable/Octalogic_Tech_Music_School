import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context_Api/AppContext";

const Login = () => {
  const { loginUser } = useContext(AppContext);

  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {

    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userRegister");

    const { email, password } = inpval;

    if (email === "") {
      alert("Please Enter Email");
    } else if (!email.includes("@")) {
      alert("Please Enter Valid Email");
    } else if (password === "") {
      alert("Please Enter Password");
    } else if (password.length < 5) {
      alert("Please Enter Valid Password");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          // console.log(el.email === email && el.password === password);
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("Create an account");
          navigate("/signup");
        } else {
          // console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));
          loginUser();
          navigate("/");
        }
      }
    }
  };

  return (
    <div>
      <div class="max-h-screen flex items-center justify-center bg-white">
        <div class="p-8 rounded shadow-md w-96">
          <h2 class="text-black text-3xl font-semibold mb-4">Music School</h2>
          <form>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium">
                Email
              </label>
              <input
                onChange={getdata}
                type="email"
                id="email"
                name="email"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div class="mb-4">
              <label for="password" class="block text-gray-700 font-medium">
                Password
              </label>
              <input
                onChange={getdata}
                type="password"
                id="password"
                name="password"
                class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="********"
                required
              />
            </div>
            <button
              onClick={addData}
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <Link to="/signup" type="submit" class="text-black px-4 py-2">
              Create an Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
