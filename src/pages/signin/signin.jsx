import { signInGoogleWithPopUp } from '../../util/firebase/firebase-auth';

const SignIn = () => {
  const logIn = async () => {
    console.log('test');
    const response = await signInGoogleWithPopUp();
    console.log(response);
  };

  const test = async () => {
    console.log("click");
  };

  return (
    <div>
      <h1>I am SignIn Page</h1>
      <button onClick={logIn} {...{className:'btn'}}>Sign In With Google Pop Up</button>
    </div>
  );
};

export default SignIn;
