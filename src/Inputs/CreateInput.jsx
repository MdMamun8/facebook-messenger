import { CiSearch } from "react-icons/ci";
const CreateInput = () => {
  return (
    <div>
      <div className='p-5 items-center'>
        <CiSearch className='relative top-[22px] flex left-[5px] mr-1' />
        <input
          className=' w-72 rounded-lg placeholder:p-8 border-neutral-600 border-2  '
          placeholder='Search messenger'
          type='text'
          name=''
          id=''
        />
      </div>
      <div className="w-[20.5rem] border-2 mb-8 border-neutral-600"></div>
    </div>
  );
};

export default CreateInput;
