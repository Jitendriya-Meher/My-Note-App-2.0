
import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAuth } from '../store/Slices/authSlice';

const NavBar = () => {

    const {isLoggedin} = useSelector(state=>state.auth);
    const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto flex-wrap gap-2'>
     
     <Link to='/' className=' mx-auto'>
        {/* <img src={logo} width={160} height={32} alt='logo' loading='lazy'></img> */}
        <p className='text-white text-2xl'>
            Notes Site
        </p>
     </Link>

     <nav className=' mx-auto'>
        <ul className='flex gap-x-6 text-white flex-wrap'>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
     </nav>

     <div className="flex item-center gap-x-4 text-richblack-100 flex-wrap mx-auto">
        {
            !isLoggedin &&
            <Link to="/login">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Log in</button>
            </Link>
        }
        {
            !isLoggedin &&
            <Link to="/signup">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Sign up</button>
            </Link>
        }
        {
            isLoggedin &&
            <Link to="/">
                <button onClick={
                    () => {
                        dispatch(logOutAuth());
                        toast.success("Logged Out!");
                    }
                } className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Log Out</button>
            </Link>
        }
        {
            isLoggedin &&
            <Link to="/dashboard">
                <button className='py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-richblack-700'>Dashboard</button>
            </Link>
        }
     </div>

    </div>
  )
}

export default NavBar
