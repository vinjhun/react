import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

export const db = getFirestore();

export const createUserFromAuth = async ({ user }, display_name) => {
  const userDocRef = doc(db, 'users', user.uid);

  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...display_name,
      });
      
      return { type: 'success', val: 'User Created Successfully' };
    } catch (error) {
      return { type: 'error', val: error.message };
    }
  } else {
    return { type: 'error', val: 'User is Exists' };
  }
};
