import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const ToyRow = ({toy}) => {
    const {_id,name, toyName, photo, price, rate, amount, catagory}= toy
    return (
        <tbody>
            {/* row 1 */}
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>{toyName}</td>
                <td>{catagory}</td>
                <td>{price}</td>
                <td>{amount}</td>
                <th>
                    <Link to={`/toy/${_id}`}><button className="btn btn-outline btn-accent  ">view details</button></Link>
                    
                </th>
            </tr>
        </tbody>
    );
};

export default ToyRow;