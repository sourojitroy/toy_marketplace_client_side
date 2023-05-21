import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = { name, email, password, photo }
        console.log(user);

        setSuccess('')
        setErrors('')

        if (password < 6) {
            setErrors('Please Add Atleast 6 Digit')
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate('/login')
                setSuccess('Registration Successful')

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-1/2 bg-white p-8 rounded shadow">
                <h2 className="text-3xl text-center font-bold mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                        <input type="text" id="name" name='name' className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                        <input type="email" id="email" name='email' className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-bold">Password</label>
                        <input type="password" id="password" className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block mb-2 font-bold">Photo URL</label>
                        <input type="text" id="photo" name='photo' className="w-full border border-gray-400 rounded px-3 py-2" />
                    </div>
                    <input className="w-full bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4" type="submit" value="Register" />
                </form>
                <h2 className='pt-2'>Do you have any account? <Link className='font-semibold' to='/login'>Login</Link></h2>
                <p className='text-red-600 text-xl font-semibold pt-2'>{errors}</p>
                <p className='text-green-600 text-xl font-semibold pt-2'>{success}</p>
            </div>
        </div>
    );
};

export default Register;