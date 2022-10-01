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
    } catch (error) {
      console.log('Error encountered', error);
    }
  } else {
    console.log('Is Exists');
  }
};
