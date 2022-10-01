import { useState } from 'react';

import { FirebaseAuthUtil } from '../../util/firebase/firebase-auth';
import { createUserFromAuth } from '../../util/firebase/fire-store';

import FloatingInput from '../input/floatingInput.component';

const formData = {
  display_name: '',
  email: '',
  password: '',
  confirm_password: '',
  error: '',
};

const SignInForm = () => {
  const [data, setFormData] = useState(formData);

  const logIn = async () => {
    try {
      const response = await FirebaseAuthUtil.signInGoogleWithPopUp();
      if (response) {
        createUserFromAuth(response);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeHandler = (event) => {
    const value = event.target.value;
    setFormData({
      ...data,
      [event.target.name]: value,
    });
  };

  const submitHandler = async () => {
    console.log('test');

    try {
      const response = await FirebaseAuthUtil.signInWithEmail(data);
      console.log(response);
    } catch (error) {
      setFormData({
        ...data,
        email: '',
        password: '',
        error: error.message,
      });
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {data.error ? <p className='p-2'>{data.error}</p> : ''}

        <FloatingInput
          type='email'
          label='Email Address'
          name='email'
          value={data.email}
          required={true}
          changeHandler={changeHandler}
        />
        <FloatingInput
          type='password'
          label='Password'
          name='password'
          value={data.password}
          required={true}
          changeHandler={changeHandler}
        />
        <div className='flex justify-evenly'>
          <button
            type='submit'
            className='text-gray-800 dark:text-white hover:bg-[#A1887F] focus:ring-4 focus:ring-[#A1887F]
                        font-medium rounded-lg text-sm px-4 py-2
                        dark:hover:bg-gray-400 focus:outline-none dark:focus:ring-gray-400'
          >
            Log In
          </button>
          <button
            onClick={logIn}
            formNoValidate
            className='m-2 min-w-[4rem] self-end rounded-full text-white ring-1 ring-[#A1887F]
                        bg-[#A1887F] p-1 text-sm shadow-sm hover:bg-[#BCAAA4] 
                        hover:shadow-lg'
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
