import { Fragment } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ButtonToggle from '../component/btn-toggle/buttonToggle.component';
import Constant from '../constant/Constant';

import './navigation.css';

const Navigation = () => {
  let location = useLocation();
  
  return (
    <Fragment>
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

      <div className='text-center min-h-screen dark:bg-black dark:text-white py-[200px]'>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames='fade'
            timeout={400}
            unmountOnExit
          >
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Fragment>
  );
};

export default Navigation;
