import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase/firebase.config';
import { IoIosEyeOff, IoMdEye } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [signError, setSignError] = useState('')
    const [isSuccess, setIsSuccess] = useState('')
    const [isShow, setIsShow] = useState(false)
    const navigate = useNavigate()




    const handleSignUp = e => {
        e.preventDefault()

        // reset state
        setSignError('')
        setIsSuccess('')


        const email = e.target.email.value;
        const password = e.target.password.value;

        // validation
        if (password.length < 6) {
            setSignError('password at least 6 characters longer')
            return
        }
        else if (!(/(?=.*[A-Z])/.test(password))) {
            setSignError('At least one uppercase character')
            return
        }

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                sendEmailVerification(auth.currentUser)
                .then(res => toast.success('check you email for verify'))
                .catch(err => console.log(err))
                setIsSuccess('Account Create Successfully')
                // navigate('/login')

            })
            .catch(err => setSignError(err.message))

    }

    return (
        <div className='text-center mt-16'>
            <div className='border max-w-[600px] mx-auto p-6 rounded-lg'>
                <h1 className='text-3xl font-bold mb-16'>Please Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <input className='px-4 py-2 mb-6 w-full border-2' type="email" name='email' placeholder='Your Email' required /><br />
                    <div>
                        <input className='px-4 py-2 mb-6 w-full border-2' type={isShow? "text": "password"} name="password" placeholder='Password' required />
                        <button type='button' className='text-4xl' onClick={() => setIsShow(!isShow)}>
                            {isShow ? <IoMdEye /> : <IoIosEyeOff />}
                        </button>
                    </div><br />
                    <input className='px-4 py-2 mb-6 w-full btn btn-primary' type="submit" value="Sign Up" />
                </form>
                {
                    signError && <p className='text-red-600'>{signError}</p>
                }
                {
                    isSuccess && <p className='text-green-600'>{isSuccess}</p>
                }
            </div>
        </div>
    );
};

export default SignUp;