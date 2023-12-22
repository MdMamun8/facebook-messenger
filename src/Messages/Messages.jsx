import { FaPhoneAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { LuSticker } from "react-icons/lu";
import { MdGifBox } from "react-icons/md";
const Messages = () => {
  return (
    <div className='message-section'>
      <div
        style={{ marginLeft: "-5px" }}
        className='flex justify-center border-4 p-1'>
        <div className='single-message flex justify-between gap-20 items-center'>
          <div className='message-image'>
            <img
              className=' w-12 h-12 rounded-full'
              src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
              alt='image'
            />
          </div>
          <div className='name-activity'>
            <h4 className=' text-black font-bold'>Rahul Ali</h4>
            <small>Active now</small>
          </div>
          <div className='audio-more flex gap-5'>
            <FaPhoneAlt />
            <FaVideo />
            <BsThreeDots />
          </div>
        </div>
      </div>

      {/* single coming message and images .................................. */}
      <div
        style={{ marginLeft: "-5px" }}
        className='all-message overflow-scroll h-[28rem] flex flex-col border-l-4 border-r-4  p-4'>
        {/* single message one */}
        <div className='single-coming-message mt-5 gap-2 items-center flex'>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
              alt=''
            />
          </div>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-100'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
        </div>

        {/* single going message  */}
        <div className='single-going-message mt-5 gap-2 items-center flex'>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-300'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1492562080023-ab3db95bfbce.avif'
              alt=''
            />
          </div>
        </div>
        {/* single coming message */}
        <div className='single-coming-message mt-5 gap-2 items-center flex'>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
              alt=''
            />
          </div>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-300'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
        </div>

        {/* single going message  */}
        <div className='single-going-message mt-5 gap-2 items-center flex'>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-300'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1492562080023-ab3db95bfbce.avif'
              alt=''
            />
          </div>
        </div>

        <div className='single-coming-message mt-5 gap-2 items-center flex'>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
              alt=''
            />
          </div>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-300'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
        </div>

        {/* single going message  */}
        <div className='single-going-message mt-5 gap-2 items-center flex'>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-300'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1492562080023-ab3db95bfbce.avif'
              alt=''
            />
          </div>
        </div>
        <div className='single-coming-message mt-5 gap-2 items-center flex'>
          <div className='image'>
            <img
              className='w-12 h-12 rounded-full'
              src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
              alt=''
            />
          </div>
          <div className='messages text-justify w-80 p-2 rounded-xl bg-slate-300'>
            <small className=''>
              Hello world! This is a long message that will hopefully get
              wrapped by our message bubble component! We will see how well it
              works.
            </small>
          </div>
        </div>
      </div>

      {/* message send section */}
      <div className='message-send-section flex gap-3 relative p-2 bg-white  top-[-2rem]'>
        <FaCirclePlus color='#0a7cff' size={22} />
        <GrGallery color='#0a7cff' size={22} />
        <LuSticker color='#0a7cff' size={22} />
        <MdGifBox color='#0a7cff' size={22} />
        <input
          className=' w-56 rounded-lg placeholder:p-2 border-neutral-600 border-2'
          placeholder='Aa'
          type='text'
          name=''
          id=''
        />
      </div>
    </div>
  );
};

export default Messages;
