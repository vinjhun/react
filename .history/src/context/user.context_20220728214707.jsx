import { createContext, useState } from 'react';
import { FirebaseAuthUtil } from '../util/firebase/firebase-auth';

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  FirebaseAuthUtil.obtainUserFromFirebase((user) => {
    
  })

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
