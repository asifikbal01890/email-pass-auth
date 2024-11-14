import React, { useContext, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { Context } from '../Providers/AuthContext';

const Login = () => {
const {login} = useContext(Context)
    const [error, setError] = useState('')
    const [emailForget, setEmailForget] = useState('')


    const handleLogin = e =>{
        e.preventDefault()
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('Login Successfully')
        })
        .catch(err => {
            console.log(err);
            console.log(err.code);
            
            setError(err.message)
        })              
        
    }



    const handleForgetPass = () =>{
        sendPasswordResetEmail(auth, emailForget)
        .then(res => {
            console.log(res);
            
            toast.success('check your email')
            
        })
        .catch(err => console.log(err)
        )
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            onChange={(e)=>setEmailForget(e.target.value)}
                            type="email" 
                            placeholder="email" 
                            name='email' 
                            className="input input-bordered" 
                            required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <button type='button' onClick={handleForgetPass} className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        {error && <p className='text-red-600'>{error}</p>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;