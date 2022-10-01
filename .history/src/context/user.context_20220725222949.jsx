import { createContext, useState } from 'react';

export const UserContext = createContext({ 
  user: null, 
  setUser: () => null 
});

export const UserProvider = ({ element }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{element}</UserContext.Provider>;
};
