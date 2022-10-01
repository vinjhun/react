import { useState } from 'react';

import { signInGoogleWithPopUp } from '../../util/firebase/firebase-auth';
import { createUserFromAuth } from '../../util/firebase/firestore';

import FloatingInput from '../input/floatingInput.component';

const formData = {
  display_name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const SignInForm = () => {
  const [data, setFormData] = useState(formData);

  const logIn = async () => {
    try {
      const response = await signInGoogleWithPopUp();
      if (response) {
        createUserFromAuth(response);
      }
    } catch (error) {
      //auth/popup-closed-by-user
      //auth/cancelled-popup-request
      console.log(error);
    }
  };

  const changeHandler = (event) => {
    const value = event.target.value;
    setFormData({
      ...data,
      [event.target.name]: value,
    });
  };

  const submitHandler = () => {};

  return (
    <>
      <form onSubmit={submitHandler}>
        <div
          id='toast-simple'
          class='flex items-center p-4 space-x-4 w-full max-w-xs text-gray-500 bg-white rounded-lg divide-x divide-gray-200 shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800'
          role='alert'
        >
          <svg
            aria-hidden='true'
            class='w-5 h-5 text-blue-600 dark:text-blue-500'
            focusable='false'
            data-prefix='fas'
            data-icon='paper-plane'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z'
            ></path>
          </svg>
          <div class='pl-4 text-sm font-normal'>Message sent successfully.</div>
        </div>
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
