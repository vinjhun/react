import { createContext, useContext } from 'react';

const userData = {
  user: null,
  setUser: () => null,
};

export const UserContext = createContext(userData);

export const UserProvider = ({ element }) => {
    const [user, setUser] = useContext(userData);

    return (
        <UserContext.Provider value={}>
            {element}
        </UserContext.Provider>
    )
};
