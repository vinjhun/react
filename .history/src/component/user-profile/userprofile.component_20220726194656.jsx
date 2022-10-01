import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <img className='p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
      src={`https://robohash.org/${user.}?set=set4&size=100x10`}></img>
    </>
  );
};

export default UserProfile;
