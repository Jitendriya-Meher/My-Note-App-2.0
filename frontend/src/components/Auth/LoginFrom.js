import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { PiSignInBold } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { logInAuth } from '../../store/Slices/authSlice';

const LoginFromForm = () => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    const dispatch = useDispatch();

    function changeHandler(e){
        const {name,value} = e.target;
        setFormData( (prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const [showPassword,setShowPassword] = useState(false);

    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault();

        const payload = {
            username: formData.username,
            email: formData.email,
            token: "token"
        };

        dispatch(logInAuth(payload));

        toast.success("logged in");
        navigate("/dashboard");
    }

  return (

    <form action="" onSubmit={submitHandler}
    className='flex flex-col w-full gap-y-4 mt-6'>

        <label htmlFor="">
            <p className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>
            Email Address
             <span className='text-pink-200'> *</span>
             </p>
            <input type="email" name="email"
            value={formData.email}
            onChange={changeHandler}
            id="" required
            placeholder='Enter email address'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
            />
        </label>

        <label htmlFor="" className='relative mt-1'>
            <p
            className='text-[0.88rem] text-richblack-5 mb-1 leading-[1.38rem]'>Password <span
            className='text-pink-200'>*</span></p>
            <input type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            id="" required
            placeholder='Enter Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[1px] outline-1'
            />

            <span onClick={
                () => {
                    setShowPassword(!showPassword);
                }
            }
            className='absolute right-3 top-[38px] cursor-pointer'
            >
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#afb2bf'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#afb2bf'></AiOutlineEye>)}
            </span>

            {/* <Link to="#">
                <p className='text-xs mt-1 text-blue-100 ml-auto absolute right-0'>Forget PassWord</p>
            </Link> */}
            
        </label>

        <button
        className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] flex mt-8 items-center justify-center gap-x-2'
        >
            <p className="text-[1.1rem]">
                Sign In
            </p>
            <PiSignInBold size={26}></PiSignInBold>
        </button>

    </form>
  )
}

export default LoginFromForm
