import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
  
  const {register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }

    await axios.post("http://localhost:3000/user/login", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data)
      {
        toast.success("Logged In successfully");
        setTimeout(() => {
          document.getElementById("my_modal_3").close();
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));
        }, 1000);
      }
    })
    .catch((error)=>{
      if(error.response){
        console.log(error);
        toast.error("Error: " + error.response.data.message);
        setTimeout(() => {}, 2000);
      }
    });
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to = "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").closest()}>✕</Link>
            
            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input type="email" placeholder='Enter your Email' className='w-11/12 px-3 rounded-md dark:bg-slate-900 dark:text-white outline-none py-1 border border-gray-300' {...register("email", { required: true})} />
                {errors.email && <span className='text-red-500 text-xs ml-2'>*This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input type="password" placeholder='Enter your Password' className='w-11/12 px-3 rounded-md dark:bg-slate-900 dark:text-white outline-none py-1 border border-gray-300' {...register("password", { required: true})}/>
                <br />
                {errors.password && <span className='text-red-500 text-xs ml-2 '>*This field is required</span>}
            </div>
            <div className='mt-4 flex justify-between px-3 '>
                <button className='bg-pink-600 hover:scale-95 hover:transition-all hover:duration-200 hover:ease-in-out text-white px-4 py-1 rounded-md'>Login</button>
                <p>Not registered? <Link to = "/signup" className='text-blue-600 underline'>Signup</Link>
                </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
