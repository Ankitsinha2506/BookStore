import React from 'react'
import list from '../assets/list.json';
import Card from './Card';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
                <div>
                    <h1 className='text-2xl md:text-4xl'>
                        We're Delighted to have you{" "}
                        <span className='text-pink-500'> Here! :)</span>
                    </h1>
                    <p className='mt-12'>
                        "Welcome to Anky's Shop, where the magic of reading comes alive. Step into a haven where every corner is filled with the promise of a new adventure, the warmth of beloved classics, and the excitement of discovering the latest bestsellers. Our shelves are stocked with carefully curated titles that cater to every taste and age, ensuring that each visit is a journey of its own. Whether you're seeking solace in a timeless story, exploring new worlds, or finding inspiration through the written word, our passionate team is here to guide you.
                    </p>
                    <Link to="/">
                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
                    {
                        list.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Courses
