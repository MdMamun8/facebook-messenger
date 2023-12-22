import { FaFacebook } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
const ProfileInformation = () => {
  return (
    <div className='profile-information-section w-96'>
      <div className='profile-name-activity items-center flex flex-col mb-5'>
        <img className="w-12 h-12 rounded-full"
          src='/src/images/photo-1573740144655-bbb6e88fb18a.avif'
          alt='profile-picture'
        />{" "}
        <h1>Rahul Ali</h1>
        <small>Active 22m ago</small>
      </div>
      <div className='profile-icons flex items-center justify-evenly mb-5'>
       <div className=" bg-slate-400 h-7 w-7 p-[4px] rounded-full">
       <FaFacebook size={21} fill="black"/>
       </div>
       <div className=" bg-slate-400 h-7 w-7 p-[5px] rounded-full"> <IoNotifications size={18} fill="black"/></div>
        <div  className=" bg-slate-400 h-7 w-7 p-[5px] rounded-full">
        <CiSearch size={18} fill="black" />
        </div>
      </div>

      <div className='profile-information-text ml-3'>
        <div className='chat-info flex justify-between'>
          <h5>Chat info</h5>
          <MdArrowForwardIos />{" "}
        </div>
    <br></br>
        <div className='customize-chat flex justify-between'>
          <h5>Customize chat</h5>
          <MdArrowForwardIos />{" "}
        </div>
        <br></br>
        <div className='media-files flex justify-between'>
          <h5>Media, files and links</h5>
          <MdArrowForwardIos />{" "}
        </div>
        <br></br>
        <div className='privacy flex justify-between'>
          <h5>Privacy & support</h5>
          <MdArrowForwardIos />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
