import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {

  const {register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='flex justify-center items-start py-40 dark:bg-slate-900 dark:text-white h-screen'>
      <div className=' p-4 w-11/12 md:w-[600px] '>
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to = "/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </Link>
    
            <h3 className="font-bold text-lg text-center">Sign Up</h3>
            <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br/>
                <input type="text" placeholder='Enter your Name' className='w-11/12 px-3 rounded-md outline-none py-1 border border-gray-300 dark:bg-slate-900 dark:text-white' {...register("name", { required: true})} />
                <br />
                {errors.name && <span className='text-red-500 text-sm ml-2'>*This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br/>
                <input type="email" placeholder='Enter your Email' className='w-11/12 px-3 rounded-md outline-none py-1 border border-gray-300 dark:bg-slate-900 dark:text-white' {...register("email", { required: true})} />
                <br />
                {errors.email && <span className='text-red-500 text-sm ml-2'>*This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br/>
                <input type="password" placeholder='Enter your Password' className='w-11/12 px-3 rounded-md outline-none py-1 border border-gray-300 dark:bg-slate-900 dark:text-white' {...register("password", { required: true})} />
                <br />
                {errors.password && <span className='text-red-500 text-sm ml-2'>*This field is required</span>}
            </div>
            <div className='mt-6 flex justify-between px-3 '>
                <button className='bg-pink-600 hover:scale-95 hover:transition-all hover:duration-200 hover:ease-in-out text-white px-4 py-1 rounded-md'>Sign Up</button>
                <p>Already have an account? <Link className='text-blue-600 underline' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</Link>
                <Login />
                </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
