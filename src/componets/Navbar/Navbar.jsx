import reactlogo from '../../assets/react.svg';

const Navbar = () => {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <div className='flex flex-shrink-0 items-center mr-4'>
              <img className='h-10 w-auto' src={reactlogo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </div>

            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <span className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer'>
                  Home
                </span>
                <span className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer'>
                  Jobs
                </span>
                <span className='text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 cursor-pointer'>
                  Add Job
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
