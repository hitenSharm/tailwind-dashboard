import { Buttons } from "./Buttons/Buttons";
import "../CSS/login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { useRef } from "react";

export default function Login() {
  const navigate = useNavigate();
  const effectRan=useRef(false);
  const notify=()=>{
    toast("Add a /dashboard to check that route, or just press login")
  }

  function handleClick() {    
    navigate("/dashboard")
  }

  useEffect(()=>{
    if(effectRan.current===false){
      notify();
    }
    return ()=>{
      effectRan.current=true;
    }
  },[])

  return (
    <>
    <ToastContainer/>
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-black">
      <div className="hidden sm:flex justify-center items-center font-bold">
        <h3 className="text-4xl text-white setFont">Board.</h3>
      </div>

      <div className="bg-listed flex flex-col justify-center ">
        <div className="max-w-[400px] w-full mx-auto p-8 px-8 flex flex-col items-center">
          <h2 className="text-4xl dark:text-black font-bold setFontBold">
            Sign In
          </h2>
          <h3 className="dark:text-black mt-2 setFont">
            Sign in to your account
          </h3>
          <div className="flex justify-evenly setFont">
            <Buttons logo={"Google"} />
            <div className="ml-5">
              <Buttons logo={"Apple"} />
            </div>
          </div>
        </div>
        <form className="max-w-[400px] w-full mx-auto p-8 px-8 rounded-3xl bg-white setFont">
          <div className="flex flex-col text-black-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-50 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-black-400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-50 mt-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
              type="password"
            />
          </div>
          <a href="#" className="flex justify-between text-blue-400 py-2">
            <p>Forgot Password</p>
          </a>
          <button className="w-full my-5 py-2 bg-black text-white font-semibold rounded-lg" onClick={handleClick}>
            Sign In
          </button>
        </form>
      </div>      
    </div>
    </>
  );
}
