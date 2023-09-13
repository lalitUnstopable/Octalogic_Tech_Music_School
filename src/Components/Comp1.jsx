import React from "react";
import style from "../CSS/Comp1.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from "./Table";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Comp1 = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  
  const [inval,setInval] = useState({

    name:"",
    description:"",
    instructor : "",
    instrument : "",
    week:"",
    student:"",
    price : "",
    status : ""

  });


  const fetchData = async () => {
    try {
      const res = await axios.get
      ("https://dash-music-school.onrender.com/courseList")

      const data1 = res.data;

      setData(data1);

      console.log(data1);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = () => {

    // JavaScript for opening the modal

    document.getElementById("openModal").addEventListener("click", function () {
      document.getElementById("myModal").classList.remove("hidden");
    });
  
    // JavaScript for closing the modal
    document.getElementById("closeModal").addEventListener("click", function () {
      document.getElementById("myModal").classList.add("hidden");
    });
  }

 

  const getData = (e) => {
   const {value, name} = e.target;

   setInval(()=> ({
    [name] :value,
   }));
  };

  const addData = (e) => {

    e.preventDefault();

    const {name,description,instructor,instrument,week,student,price,status} = inval;

    axios.post("https://dash-music-school.onrender.com/courseList",inval)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="flex">
      <div className={style.comp1_div}>
        <div className={style.div_img}>
          <img src="../Media/student_logo.jpg" alt="An image" />
        </div>
        <div className={style.div_img2}>
          <h1>Home</h1>
        </div>
        <div className={style.div_img3}>
          <h1>Courses</h1>
        </div>
      </div>

      <div className={style.comp1_div2}>
        <h1 className={style.comp1_div2_h1}>Courses</h1>
        <h1 className={style.comp1_div2_h2}>COURSE LIST</h1>

        <Table data={data} />

        <div className={style.btn}>
          <button
            id="openModal"
            class="text-black font-bold py-4 px-8 rounded flex"
          >
            <AiOutlinePlus className="mr-4 mt-1 text-lg font-bold" />{" "}
            <h5 className="text-lg font-bold" onClick={openModal}>Add Course</h5>
          </button>
        </div>

        <div
          id="myModal"
          className="modal hidden fixed inset-0 overflow-auto flex items-center justify-center z-50"
        >
          <div class="modal-content bg-white w-1/2 p-6 rounded-lg shadow-lg">
            <h3 className="text-black text-xl font-bold mb-5" onClick={addData}>Add Course</h3>
            <input
              type="text"
              name="name"
              placeholder="Course Name"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="description"
              placeholder="Description"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="instructor"
              placeholder="Instructor"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="instrument"
              placeholder="Instrument"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="week"
              placeholder="Day of the Week"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="student"
              placeholder="No of the Students"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className={style.input}
              onChange={getData}
            />
            <br />
            <input
              type="text"
              name="status"
              placeholder="Status"
              className={style.input}
              onChange={getData}
            />
            <br />
            <button
              id="closeModal"
              class="mt-4 bg-grey-400 text-black  font-bold py-2 px-4 rounded"
            >
              Close
            </button>
            <button
              id="closeModal"
              class="mt-4 bg-grey-400 text-black font-bold py-2 px-4 rounded"
            >
              Add Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp1;
