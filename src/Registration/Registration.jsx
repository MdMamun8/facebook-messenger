/* eslint-disable react/no-unescaped-entities */
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Gender from "../Gender/Gender";
import { useState } from "react";
import Dates from "./../Dates/Dates";
// import { data } from "autoprefixer";

const Registration = () => {
  // eslint-disable-next-line no-unused-vars
  const [formdata, setFormdata] = useState("");
  const [selectoption, setSelectoption] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      radio: "",
    },
  });
  const handleOption = (e) => {
    setSelectoption(e.target.value);
  };
  const handlelogin = (data) => {
    // console.log(data);
    setFormdata(data);
  };
  console.log(formdata.radio);
  return (
    <div className=' flex justify-center'>
      <form
        onSubmit={handleSubmit((data) => {
          handlelogin(data);
        })}>
        <div className='genders-section w-[24rem]  border-2 '>
          <div className='heading text-start pl-2 mt-4'>
            <h1>Sign Up</h1>
            <p>It's quick and easy.</p>
          </div>
          <div className='rectangle w-[350px] h-1 border-2'></div>
          <div className='names flex mb-5 mt-5 justify-around gap-5 pl-5 pr-5'>
            <input
              className=' bg-neutral-300 border-2 rounded-lg placeholder:p-3 w-[150px]'
              type='text'
              {...register("name", { required: true })}
              placeholder='User name'
            />
            <input
              className=' bg-neutral-300 border-2 rounded-lg placeholder:p-3'
              type='email'
              placeholder='email'
              {...register("email", { required: true })}
            />
          </div>
          <div className='mobile-number  flex mb-5 mt-5 justify-center gap-5'>
            <input
              className='bg-neutral-300 border-2 rounded-lg placeholder:p-3 w-[150px]'
              type='number'
              {...register("password", { required: true })}
              placeholder='password'
            />

            <input
              className='bg-neutral-300 border-2 rounded-lg placeholder:p-3'
              type='number'
              {...register("confirmPassword", { required: "password not" })}
              placeholder='Confirm password'
            />
          </div>
          <div className='dates'>
            <Dates register={register} />
          </div>
          <div className='genders'>
            <Gender handleOption={handleOption} register={register} />
          </div>
          <div className='info flex justify-start p-8'>
            <p>
              By clicking Sign Up, you agree to our Terms , Data & Policy and
              Cookies Policy, You may receive SMS Notifications from us and can
              opt out any time
            </p>
          </div>
          <div className='sign-up'>
            {/* <Link to={"/login"}> */}
            <button
              type='submit'
              title='sign up button'
              className=' bg-green-700 w-56 rounded-lg text-white mb-5'>
              Sign Up
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
      <h1>{selectoption}</h1>
    </div>
  );
};

export default Registration;
