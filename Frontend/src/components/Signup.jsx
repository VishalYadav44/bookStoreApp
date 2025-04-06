import React from 'react'
import {Link} from "react-router-dom"
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => console.log(data)
  return (
      <>
        <div className="flex h-screen items-center justify-center ">
        <div id="my_modal_3" className="border-[2px] p-5 rounded-md shadow-md w-[600px]">
        <div className="">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
        <Link to={"/"} className="absolute btn btn-circle btn-ghost btn-sm right-90 bg-clip-border">✕</Link>
        
        <h3 className="font-bold text-lg">Signup</h3>
        <div className="mt-4 space-y-2">
        <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
                  <input type="text" placeholder='Enter your fullName' className="w-80 px-3 py-1 rounded-md outline-none"
                    {...register("name", { required: true })} />
                  {errors.name && <span>This field is required</span>}
        </div>
            <span>Email</span>
            <br />
                <input type="email" placeholder='Enter your email' className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
        </div>
        <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
                <input type="text" placeholder='Enter your password' className="w-80 px-3 py-1 rounded-md outline-none"
                  {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}
        </div>
        <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 cursor-pointer">Signup</button>
              <p className="text-xl">Have account?{ " "}<button className=" text-blue-500 underline cursor-pointer"
                onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>{ " "}<Login/></p>
              </div>  
        </form>      
        </div>
        </div>
        </div>
    </>
  )
}

export default Signup