import { createContext, useState } from 'react';

const userData = {
  user: null,
  setUser: () => null,
};

export const UserContext = createContext({});

export const UserProvider = ({ element }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{element}</UserContext.Provider>;
};
