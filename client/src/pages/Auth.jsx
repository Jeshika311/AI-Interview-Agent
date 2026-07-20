import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
import { serverUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const Auth = ({isModel = false}) => {

  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let User = response.user;
      let name = User.displayName;
      let email = User.email;

      const result = await axios.post(`${serverUrl}/api/auth/google`, { name, email }, {withCredentials: true});

      dispatch(setUserData(result.data));
      console.log("Google authentication successful:", User);
    }
    catch (error) {
      console.error("Error during Google authentication:", error);
      dispatch(setUserData(null));
    }
  }

  return (
    <div className={`w-full 
    ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}`}>
      <motion.div 
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5 ,
      }}

      className={`w-full
      ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
      bg-white shadow-2xl border border-gray-200 `}>  
        <div className='flex items-center justify-center mb-6 gap-3'>
          <div className='bg-black text-white p-2 rounded-lg'>
            <BsRobot size={18}/>
          </div>
          <h2 className='font-semibold text-lg'>AI Interview Agent</h2>
        </div>
        <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
          Continue with{" "}
          <span className = 'bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-3 mt-2'>
            <IoSparkles size={18}/>
            AI Smart Interview
          </span>
        </h1>
        <p className='text-gray-600 text-center text-sm md:text-base leading-relaxed mb-8'>
          Sign in to start AI-powered mock interviews, track your progress, and unlock detailed performance insights.
        </p>

        <motion.button onClick={handleGoogleAuth}
        whileHover={{ opacity: 0.7, scale: 1.05 }}
        whileTap={{ opacity: 1, scale: 0.95 }}
        className = 'w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md'>
          <FcGoogle size={20}/>
          Continue with Google
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Auth
