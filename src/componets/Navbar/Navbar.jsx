import { NavLink } from 'react-router-dom';
import reactlogo from '../../assets/react.svg';
import logo from '../../assets/logo.png';
const Navbar = () => {
  const Activelinks = ({ isActive }) =>
    isActive
      ? 'text-white bg-gray-900 rounded-md px-3 py-2'
      : 'text-white hover:bg-gray-900 rounded-md px-3 py-2';

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500 fixed w-full z-10'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <div className='flex flex-shrink-0 items-center mr-4'>
              <NavLink to='/' className='flex items-center' >
              <img className='h-10 w-auto bg-transparent ' src={logo} alt='React Jobs' />
              {/* <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Job Explorer
              </span> */}
              </NavLink>
            </div>

            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <NavLink to="/" className={Activelinks}>Home</NavLink>
                <NavLink to="/jobs" className={Activelinks}>Jobs</NavLink>
                <NavLink to="/add-job" className={Activelinks}>Add Job</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
