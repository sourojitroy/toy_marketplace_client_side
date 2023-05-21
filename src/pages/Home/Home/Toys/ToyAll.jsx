import React, { useEffect, useState } from 'react';
import ToyRow from './ToyRow';

const ToyAll = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-car-server-blush.vercel.app/toy')
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [])

    return (
        <div>
            <h2>Page is comming</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Catagory</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
            
            {
                toys.map(toy=> <ToyRow 
                    key={toy._id}
                    toy={toy}
                ></ToyRow>)
            }

                </table>
            </div>
        </div>
    );
};

export default ToyAll;