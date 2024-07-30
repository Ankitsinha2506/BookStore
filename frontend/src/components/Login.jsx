import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

    return (
        <div>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email: </span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter Your Email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: "* Email is required" })}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password: </span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: "*Password is required" })}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* Button */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Login
                            </button>
                            <p className='text-xl'>
                                Not Registered?
                                <Link to='/signup' className='underline text-blue-500 cursor-pointer ml-1'>
                                    Signup Here
                                </Link>
                            </p>
                        </div>
                        
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
