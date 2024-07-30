import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);
    return (
        <>
            <div className='flex h-screen items-center justify-center '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg">Signup</h3>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name : </span>
                                <br />
                                <input type="text"
                                    placeholder='Enter Your Full Name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none' 
                                    {...register("name", { required: "* Name is required" })}
                                    />
                                    {errors.text && <p className="text-red-500">{errors.text.message}</p>}
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email : </span>
                                <br />
                                <input type="email"
                                    placeholder='Enter Your Email'
                                    className='w-80 px-3 py-1 border rounded-md outline-none' 
                                    {...register("email", { required: "* Email is required" })}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password : </span>
                                <br />
                                <input type="password"
                                    placeholder='Enter your password'
                                    className='w-80 px-3 py-1 border rounded-md outline-none' 
                                    {...register("password", { required: "* Password is required" })}
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>

                            {/* BUtton */}
                            <div className='flex justify-around mt-4'>
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    SignUp
                                </button>
                                <p className='text-xl'>Have Account ?
                                    <button className='underline text-blue-500 cursor-pointer'
                                        onClick={() =>
                                            document.getElementById('my_modal_3').showModal()
                                        }
                                    >
                                        Login Here
                                    </button>{" "}
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup