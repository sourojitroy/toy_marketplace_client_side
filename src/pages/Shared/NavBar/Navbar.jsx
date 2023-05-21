import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import logo from '../../../assets/toy-car-logo-C2535C6799-seeklogo.com.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='mb-6'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center'>
                    <img src={logo} className='w-10 h-10'
                     alt="" />
                    <Link className="btn btn-ghost normal-case text-xl">Toy Car Store</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/alltoy'>All Toy</Link></li>
                        <li><Link to='/mytoys'>My Toy</Link></li>
                        <li><Link to='/addtoy'>Add a Toy</Link></li>

                        {
                            user ? <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip" data-tip={user.displayName}>
                                    <div className="w-12 rounded-full" >
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <button onClick={handleLogOut} className='btn'><Link>Logout</Link></button>
                            </> :
                        <button className='btn'><Link to='/login'>Login</Link></button>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;