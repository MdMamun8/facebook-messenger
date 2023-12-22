/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import './Login.css'
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='  w-[1100px]'>
      <div className='first-letter:pt-20 pb-20'>
        <div className=' bg-slate-300 flex flex-col justify-center items-center  gap-5 w-2/5 h-[30rem] my-0 mx-auto p-14 border-2 border-black '>
          <div className='heading'>
            <img
              className='ml-10 mb-5 rounded-full w-16'
              src='/src/images/download.jpg'
              alt=''
            />
            <h1 className='flex items-center text-center'>
              Sign in to Get Started
            </h1>
          </div>
          <div className='inputs'>
            <form className='' onSubmit={handleSubmit}>
              <div className=' block justify-center my-0 mx-auto'>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 bg-neutral-200 mb-5 p-5'
                    type='email'
                    placeholder='Your Mail'
                  />
                </label>
                <br></br>
                <label>
                  <input
                    className='w-96 h-14 rounded-lg border-2 bg-neutral-200 mb-5 p-5'
                    type='text'
                    placeholder='Your Password'
                  />
                </label>
              </div>
              <NavLink to='/conversation'>
                <button className='w-96 rounded-lg bg-blue-500 text-white hover:border-white ease-in-out duration-500 h-8'>
                  Log In
                </button>
              </NavLink>
            </form>
            <div>
              <small>
                don't have an account?? <Link to={"/"}>Sign up!</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
