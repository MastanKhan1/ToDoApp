import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <>
        <div className="d-flex justify-content-around align-items-center py-2 shadow">
            <div className='px-2'>
                <h1>To Do App</h1>
            </div>
            <div className='px-2 pt-2'>
                <ul className='list-unstyled'>
                    <li className='d-inline px-2 fs-6 fw-semibold'><Link className='text-decoration-none text-black' to="">Home</Link></li>
                    <li className='d-inline px-2 fs-6 fw-semibold'><Link className='text-decoration-none text-black' to="/your-tasks">Your Tasks</Link></li>
                    <li  className='d-inline px-2 fs-6 fw-semibold'><Link className='text-decoration-none text-black' to="">About Us</Link></li>
                    <li  className='d-inline px-2 fs-6 fw-semibold'><Link className='text-decoration-none text-black' to="">Contact</Link></li>
                    <li  className='d-inline px-2 fs-6 fw-semibold'><Link className='text-decoration-none text-black' to="">Account</Link></li>
                </ul>
            </div>
            <div className='pb-2'>
                <button className='px-4 py-2 rounded-pill mx-2 border-primary text-primary' >Sign In</button>
                <button className='px-4 py-2 rounded-pill mx-2 border-0 text-primary bg-primary text-white' >Sign Up</button>
            </div>
        </div>

        </>
    )
}


export default Header;