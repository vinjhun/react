import { createContext, useState } from 'react';

const userData = {
  user: null,
  setUser: () => null,
};

export const UserContext = createContext({});

export const UserProvider = ({ element }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
    {element}
    </UserContext.Provider>
  );
};
