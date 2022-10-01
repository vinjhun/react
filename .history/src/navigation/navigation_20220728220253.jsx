import { useContext } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { UserContext } from '../context/user.context';

import ButtonToggle from '../component/btn-toggle/buttonToggle.component';
import UserProfile from '../component/user-profile/userprofile.component';
import Constant from '../constant/Constant';

import './navigation.css';

const Navigation = () => {
  const { user } = useContext(UserContext);
  let location = ''; //useLocation();

  return (
    <>
      <div
        className='flex text-end p-2.5 
                  bg-slate-50 dark:bg-gray-800 
                  justify-center 
                  shadow-lg dark:shadow-slate-800'
      >
        <div className='nav-header flex'>
          <NavLink key='home' to='/' className='p-2.5 dark:text-white'>
            Home
          </NavLink>
        </div>

        <div className='nav-item grow flex justify-end'>
          <ButtonToggle />
          {Constant.MAIN_ROUTES.map(({ path, name }) => {
            if (user && path === 'profile') return (<UserProfile key={user-profile}></UserProfile>)

            return (
              <NavLink
                key={`nav-${name}`}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'font-bold underline p-2.5 dark:text-white'
                    : 'p-2.5 dark:text-white'
                }
              >
                {name}
              </NavLink>
            );
          })}
        </div>
      </div>

      <div className=' min-h-screen dark:bg-black dark:text-white'>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
