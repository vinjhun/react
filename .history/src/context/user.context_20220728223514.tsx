import { createContext, Dispatch, useEffect, useState } from 'react';
import { FirebaseAuthUtil } from '../util/firebase/firebase-auth';

type User = {
  user: string,
  setUser: Dispatch<any>
}

export const UserContext = createContext({
  user: null,
  setUser: (): Dispatch<any> => null,
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
