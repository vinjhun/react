import { useContext, useState } from 'react';
import { UserContext } from '../../context/user.context';

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const signOutHandler = () => {
    setUser(null);
  }

  return (
    <>
      <img
        className='p-1 mx-2.5 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 '
        src={`https://robohash.org/${user.uid}?set=set4&size=100x100`}
        data-dropdown-toggle='userDropdown'
        data-dropdown-placement='bottom-start'
      ></img>

      <a className='p-2.5 text-sm dark:text-white cursor-pointer' onClick={signOutHandler}> Sign Out</a>
    </>
  );
};

export default UserProfile;
