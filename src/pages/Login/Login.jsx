import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [errors, setErrors] = useState('');
  const [success, setSuccess] = useState('');

  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password }
    console.log(user);

    setErrors('');

    if (password.length < 6) {
      setErrors('Please Add Atleast 6 Digit')
    }

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from)
        setSuccess('Login Seccessful')
      })
      .catch(error => {
        setErrors('Wrong Email/Password');
      })

  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser);
        navigate(from)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2 bg-white p-8 rounded shadow">
        <h2 className="text-3xl text-center font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">Email</label>
            <input type="email" id="email" className="w-full border border-gray-400 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold">Password</label>
            <input type="password" id="password" className="w-full border border-gray-400 rounded px-3 py-2" />
          </div>
          <input className="w-full bg-sky-400 text-white font-bold py-2 px-4 rounded" type="submit" value="Login" />
        </form>
        <button onClick={handleGoogleSignIn} className='w-full bg-sky-400 text-white font-bold py-2 px-4 rounded mt-4 flex justify-center items-center gap-2'> <FaGoogle></FaGoogle> Login with Google </button> <br />
        <h2 className='pt-2'>New to this site? <Link className='font-semibold' to='/register'>Register</Link></h2>
        <p className='text-red-600 text-xl font-semibold pt-2'>{errors}</p>
        <p className='text-green-600 text-xl font-semibold pt-2'>{success}</p>
      </div>

    </div>
  );
};

export default Login;