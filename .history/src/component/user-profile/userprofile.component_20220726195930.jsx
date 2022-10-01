import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <img
        className='p-1 mx-2.5 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer'
        src={`https://robohash.org/${user.uid}?set=set4&size=100x100`}
        data-dropdown-toggle='userDropdown'
        data-dropdown-placement='bottom-start'
      ></img>

      <div
        id='userDropdown'
        className='hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
      >
        <div className='py-3 px-4 text-sm text-gray-900 dark:text-white'>
          <div>Bonnie Green</div>
          <div className='font-medium truncate'>name@flowbite.com</div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
