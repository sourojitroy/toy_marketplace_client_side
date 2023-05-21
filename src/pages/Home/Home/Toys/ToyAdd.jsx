import React, { useContext } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';

const ToyAdd = () => {
    const {user}= useContext(AuthContext);
    const handleToyAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rate = form.rate.value;
        const amount = form.amount.value;
        const comment = form.comment.value;
        const catagory = form.catagory.value;

        const product = { name, photo, price, rate, amount, comment, catagory, email, toyName }
        // console.log(user);

        fetch('https://toy-car-server-blush.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })

    }
    return (
        <div>
            
            <form onSubmit={handleToyAdd}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className='flex gap-6'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" name='email' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name='toyName' className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="form-control w-1/2">
                                    <div className="input-group">
                                        <select name='catagory' className="select select-bordered">
                                            <option disabled selected>Pick category</option>
                                            <option>Car</option>
                                            <option>Bus</option>
                                            <option>Truck</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name='price' className="input input-bordered" />
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Rate</span>
                                    </label>
                                    <input type="number" name='rate' className="input input-bordered" />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Amount</span>
                                    </label>
                                    <input type="number" name='amount' className="input input-bordered" />
                                </div>
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment</span>
                                    </label>
                                    <input type="text" name='comment' className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Add a toy" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ToyAdd;