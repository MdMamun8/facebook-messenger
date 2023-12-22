import { data } from "autoprefixer";
import { useForm } from "react-hook-form";

export default function FormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlelogin = (data) => {
    const { name, email, password } = data;
    console.log("name", name);
    console.log("email", email);
    console.log("pass", password);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          handlelogin(data);
        })}>
        <input
          className='border-2'
          type='text'
          placeholder='name'
          {...register("name", { required: true })}
        />
        <input
          className='border-2'
          type='email'
          placeholder='email'
          {...register("email", { required: true })}
        />
        <input
          className='border-2'
          type='text'
          placeholder='password'
          {...register("password", { required: true })}
        />

        <input type='submit' />
      </form>
    </div>
  );
}
