import { createContext, useState } from 'react';

const userData = {
  user: null,
  setUser: () => null,
};

export const UserContext = createContext(userData);

const UserProvider = ({ element }) => {
  const [user, setUser] = useState({});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {element}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
