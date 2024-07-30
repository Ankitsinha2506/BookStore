import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* Close button */}
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>

                            <h1 className="font-bold text-lg">Contact Us</h1>

                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Name : </span>
                                <br />
                                <input type="text"
                                    placeholder='Enter Your Full Name'
                                    className='w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: "* Name is required" })}
                                />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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

                            {/* message */}
                            <div className='mt-4 space-y-2'>
                                <span>Message : </span>
                                <br />
                                <textarea className="textarea textarea-bordered mt-4 space-y-2 w-80 px-3 py-1 border rounded-md outline-none "
                                    placeholder="Message"
                                >

                                </textarea>

                            </div>

                            {/* Button */}
                            <div className='flex justify-left mt-4'>
                                <button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                                    Submit
                                </button>
                                {/* <p className='text-xl'>
                                    Have Account?{" "}
                                    <Link to='/login' className='underline text-blue-500 cursor-pointer'>
                                        Login Here
                                    </Link>
                                </p> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
