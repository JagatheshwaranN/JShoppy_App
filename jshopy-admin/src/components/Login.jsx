import React, { useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
            if (response.data.success) {
                setToken(response.data.token);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='flex w-[850px] bg-white shadow-xl rounded-xl overflow-hidden'>

                {/* Left Section */}
                <div className='w-1/2 bg-black text-white flex flex-col justify-center items-center p-10'>
                    <h1 className='text-3xl font-bold mb-4'>JSHOPPY</h1>
                    <p className='text-sm text-gray-300 text-center'>
                        Manage products, orders and customers from one powerful admin dashboard.
                    </p>
                </div>

                {/* Right Section */}
                <div className='w-1/2 p-10'>
                    <h1 className='text-2xl font-bold mb-6'>Admin Login</h1>

                    <form onSubmit={onSubmitHandler}>
                        <div className='mb-4'>
                            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)} value={email}
                                className='rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-black outline-none'
                                type='email'
                                placeholder='Your Email'
                                required
                            />
                        </div>

                        <div className='mb-4'>
                            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)} value={password}
                                className='rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-black outline-none'
                                type='password'
                                placeholder='Your Password'
                                required
                            />
                        </div>
                        <button
                            className='mt-2 w-full py-2 rounded-md text-white bg-black hover:bg-gray-800 transition'
                            type='submit'
                        >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
