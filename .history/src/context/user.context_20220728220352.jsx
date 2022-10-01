import { createContext, useEffect, useState } from 'react';
import { FirebaseAuthUtil } from '../util/firebase/firebase-auth';

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const value = { user, setUser };

  useEffect(() => {
    FirebaseAuthUtil.obtainUserFromFirebase((firebaseUser) => {
      if (firebaseUser) {
        const { user } = firebaseUser;
        setUser({
          ...user,
          user,
        });
      }
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
