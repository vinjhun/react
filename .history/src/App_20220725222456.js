import './App.css';

import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';

import Home from './pages/home/home';
import Constant from './constant/Constant';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' key='nav' element={<Navigation />}>
          <Route key='home' index element={<Home />} />
          {Constant.MAIN_ROUTES.map(({ name, path, Component }) => (
            <Route key={name} path={path} element={<Component />}></Route>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
