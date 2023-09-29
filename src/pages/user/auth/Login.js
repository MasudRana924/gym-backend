import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-24 lg:mt-48 mb-32">
        <div class="px-6 py-4">

            <h3 class="text-start mt-3 text-xl font-medium text-gray-600 dark:text-gray-200">Welcome Back</h3>

            <form>
                <div class="w-full mt-8">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                </div>
    
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                </div>
    
                <div class="flex items-center justify-between mt-4">
                    <Link to="" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>
    
                    <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    
        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
    
            <Link to="/user/register" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
        </div>
    </div>
    );
};

export default Login;