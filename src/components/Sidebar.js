
import { TfiAlignJustify } from "react-icons/tfi";
import { CgAdd } from "react-icons/cg";
import { CiChat1 } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";




const SideBar = ()=>{
    return(
        <>
        <div className='d-inline-flex flex-column gap-5 bg-light p-5'>
            <div className=''>
                <div className="pl-5 mb-3">
                <TfiAlignJustify className='' />
                </div>  
                <div className='rounded-pill pt-2 px-5 d-flex bg-secondary-subtle'>
                    <CgAdd className="mx-3 mt-1" />
                    <p className=''>Recent Todos</p>
                </div>
            </div>
                
            <div className=''>
                <div className='rounded-pill pt-2 px-5 d-flex bg-secondary-subtle mb-2'>
                    <CiCircleQuestion className='mx-3 mt-1'/>
                    <p>Help</p>
                </div>
                <div className='rounded-pill pt-2 px-5 d-flex bg-secondary-subtle mb-2'>
                    <BsClockHistory className='mx-3 mt-1'/>
                    <p>Activity</p>
                </div>
                <div className='rounded-pill pt-2 px-5 d-flex bg-secondary-subtle mb-2'>
                    <IoIosSettings className='mx-3 mt-1'/>
                    <p>Settings</p>
                </div>
                <div className="mx-3 my-5">
                    <p className="text-center">Made with 💖 from Mastan Khan</p>
                    <p className="text-center">Magadi, Karnataka</p>
                </div>
            </div>
        </div>
        </>
    )
}


export default SideBar;