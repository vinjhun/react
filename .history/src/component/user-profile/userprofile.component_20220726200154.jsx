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
    </>
  );
};

export default UserProfile;
