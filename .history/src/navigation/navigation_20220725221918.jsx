import { NavLink, Outlet, useLocation } from 'react-router-dom';

import {UserProvider} from '../context/UserContext.component';
import ButtonToggle from '../component/btn-toggle/buttonToggle.component';
import Constant from '../constant/Constant';

import './navigation.css';

const Navigation = () => {
  let location = ''; //useLocation();
  console.log("navigation rendered");

  return (
    <UserProvider>
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
          {Constant.MAIN_ROUTES.map(({ path, name }) => (
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
          ))}
        </div>
      </div>

      <div className=' min-h-screen dark:bg-black dark:text-white'>
        <Outlet />
      </div>
    </UserProvider>
  );
};

export default Navigation;
