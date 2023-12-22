/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import CreateInput from "../Inputs/CreateInput";
import Messages from "../Messages/Messages";
import ProfileInformation from "../ProfileInformation/ProfileInformation";
const Conversation = () => {
  return (
    <div style={{ marginTop: "-25px" }} className='flex items-start'>
      <div className='conversation-section mt- border-r-4 border-l-4   h-[38rem]  overflow-scroll'>
        <div className='border-t-4'>
          <div className=' heading flex justify-between p-2 pl-6 pr-6 items-center text-black font-bold text-2xl'>
            Chats
            <BsFillChatSquareDotsFill />
          </div>
        </div>
        <CreateInput />

        <div className='conversation-list mr-10 ml-10'>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile flex'>
              <img
                className=' w-12 rounded-full'
                src='/src/images/photo-1492562080023-ab3db95bfbce.avif'
                alt='image'
              />
            </div>
            <div className='name-message '>
              <h4 className=' text-black font-bold'>Mohammad Ibrahim</h4>
              <small>kemon achen vai??</small>
              <small> .2min</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1517070208541-6ddc4d3efbcb.avif'
                alt='image'
              />
            </div>
            <div className='name-message block '>
              <h4 className=' text-black font-bold'>Shajjad Hossain</h4>
              <small>Assalalmu Alaikum</small>
              <small> .1hr</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1519085360753-af0119f7cbe7.avif'
                alt='image'
              />
            </div>
            <div className='name-message block '>
              <h4 className=' text-black font-bold'>Mamun Ur Rashid</h4>
              <small>Today is Friday</small>
              <small> .1hr</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
                alt='image'
              />
            </div>
            <div className='name-message block '>
              <h4 className=' text-black font-bold'>Rahul Ali</h4>
              <small>are you want to go</small>
              <small> .2hr</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation  flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1603415526960-f7e0328c63b1.avif'
                alt='image'
              />
            </div>
            <div className='name-message block'>
              <h4 className=' text-black font-bold'>Ma Ru An</h4>
              <small>Good Morning</small>
              <small> .3hr</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1624561172888-ac93c696e10c.avif'
                alt='image'
              />
            </div>
            <div className='name-message block'>
              <h4 className=' text-black font-bold'>Ahmad Abdullah</h4>
              <small>`I'm going to Dhaka now</small>
              <small> .2d</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1633332755192-727a05c4013d.avif'
                alt='image'
              />
            </div>
            <div className='name-message block'>
              <h4 className=' text-black font-bold'>Abdullah As Sayem</h4>
              <small>take love brother</small>
              <small> .5d</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1639149888905-fb39731f2e6c.avif'
                alt='image'
              />
            </div>
            <div className='name-message block'>
              <h4 className=' text-black font-bold'>Nayan Islam</h4>
              <small>Assalamu Alaikum</small>
              <small> .1wk</small>
            </div>
          </div>
          <br></br>
          <div className='single-conversation flex gap-10 justify-between'>
            <div className='conversation-profile'>
              <img
                className=' w-12 h-12 rounded-full'
                src='/src/images/photo-1639149888905-fb39731f2e6c.avif'
                alt='image'
              />
            </div>
            <div className='name-message block'>
              <h4 className=' text-black font-bold'>Nayan Islam</h4>
              <small>Assalamu Alaikum</small>
              <small> .1wk</small>
            </div>
          </div>
        </div>
      </div>
      {/* message component */}
      <div>
        {" "}
        <Messages />
      </div>
      <div>
        <ProfileInformation />
      </div>
    </div>
  );
};

export default Conversation;
