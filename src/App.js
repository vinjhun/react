import logo from './logo.svg';
import './App.css';

import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';

import Home from './pages/home/home';
import Constant from './constant/Constant';

function isDarkMode() {
  return (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}

export const ThemeContext = createContext(null);

function App() {
  const [mode, setMode] = useState('');

  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setMode('light');
    }
  }, []);

  function toggleMode() {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setMode('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setMode('light');
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setMode('light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setMode('dark');
      }
    }
  }

  return (
    <div>
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <Routes>
          <Route path='/' key='nav' element={<Navigation />}>
            <Route key='home' index element={<Home />} />
            {Constant.MAIN_ROUTES.map(({ name, path, Component }) => (
              <Route key={name} path={path} element={<Component />}></Route>
            ))}
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
