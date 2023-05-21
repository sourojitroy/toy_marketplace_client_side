import React from 'react';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toys = useLoaderData();
    const {name, toyName, photo, price, rate, amount, catagory} = toys

    return (
        <div>
            <h2>{toyName}</h2>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo}/>
                </figure>
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-center">{toyName}</h2>
                    <p className='text-2xl text-start font-semibold'>Seller Name: {name}</p>
                    <p className='text-2xl text-start font-semibold'>Price: {price} Tk.</p>
                    <p className='text-2xl text-start font-semibold'>Available Quantity: {amount}</p>
                    <p className='text-2xl text-start font-semibold'>Rating: {rate} <FaStar></FaStar> </p>
                    
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;