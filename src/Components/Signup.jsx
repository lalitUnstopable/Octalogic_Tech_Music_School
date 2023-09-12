import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const navigate = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [data, setData] = useState([]); // Array to store user registrations

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, password } = inpval;

        if (name === "" || email === "" || password === "") {
            alert("Please fill out all fields");
        } else if (!email.includes("@")) {
            alert("Please enter a valid email");
        } else if (password.length < 5) {
            alert("Password must be at least 5 characters long");
        } else {

            const existingData = JSON.parse(localStorage.getItem("userRegister")) || [];

            const filterData = existingData.filter((user) => user.email === email);

            if (filterData.length === 0) {
                // Create a new user object
                const newUser = {
                    name,
                    email,
                    password
                };

                // Add the new user to the existing data
                existingData.push(newUser);

                // Store the updated data array in localStorage
                localStorage.setItem("userRegister", JSON.stringify(existingData));

                alert("Account created successfully");
                navigate("/login");
            }  else {
                alert("User already registered with this email");
                navigate("/login");

            }

            // Store the updated data array in localStorage
          
            
        }
    }



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-black text-3xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label for="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
             onChange={getdata}
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              
            />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input

             onChange={getdata}
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="you@example.com"
              
            />
          </div>
          <div className="mb-4">
            <label for="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              onChange={getdata}
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="********"
              
            />
          </div>
          <button onClick={addData}
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
          <button 
            type="submit"
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
           <NavLink className="text-white" to="/login">Login</NavLink> 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
