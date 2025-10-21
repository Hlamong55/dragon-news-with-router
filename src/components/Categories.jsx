import React, { use } from 'react';
import { NavLink } from 'react-router';

const ctgPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {
    // console.log(ctgPromise);
    const categories = use(ctgPromise);
    return (
        <div>
            <h1 className='font-bold'>All Categories ({categories.length})</h1>

            <div className='grid grid-cols-1 mt-5'>
                {
                    categories.map((category) => (
                    <NavLink 
                    id={category.id}
                    className={"btn border-0 font-semibold bg-white text-accent hover:bg-base-300 hover:text-black"}
                    to={`/category/${category.id}`}>
                    {category.name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;