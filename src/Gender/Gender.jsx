/* eslint-disable react/prop-types */
const Gender = ({ register, handleoption }) => {
  return (
    <div>
      <h3 className='flex text-start pl-8 mt-3'>Gender</h3>
      <div className='genders flex justify-center gap-4'>
        <div className='female w-24 border-2'>
          <label htmlFor=''>
            {" Female "}
            <input
              onChange={handleoption}
              type='radio'
              name='female'
              {...register("radio", { required: true })}
              value='Female'
            />
          </label>
        </div>

        <div className='male w-24 border-2'>
          <label htmlFor=''>
            {" Male "}
            <input
              type='radio'
              onChange={handleoption}
              name='male'
              {...register("radio")}
              value='Male'
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Gender;
