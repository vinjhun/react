import { useState } from 'react';
import { createUserFromAuth } from '../../util/firebase/fire-store';
import {
  FirebaseAuthUtil,
  signUpWithEmail2,
} from '../../util/firebase/firebase-auth';

import FloatingInput from '../input/floatingInput.component';
import Message from '../message/message.component';

const formData = {
  display_name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const SignUpForm = () => {
  const [data, setFormData] = useState(formData);

  const changeHandler = (event) => {
    const value = event.target.value;
    setFormData({
      ...data,
      [event.target.name]: value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log('sign up');
    const { display_name, email, password } = data;

    try {
      console.log(email, password);
      const rsp = await FirebaseAuthUtil.signUpWithEmail(data);

      console.log('create user');
      console.log(rsp);
      if (rsp) {
        const result = await createUserFromAuth(rsp, {
          displayName: display_name,
        });

        console.log(result);
      }
    } catch (err) {
      console.log(err);

      setFormData({
        ...data,
        display_name: '',
        email: '',
        password: '',
        confirm_password: '',
        error: err.message,
      });
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {data.error ? <Message type='error' val={data.error} /> : ''}
        <FloatingInput
          type='text'
          label='Display Name'
          name='display_name'
          value={data.display_name}
          required={true}
          changeHandler={changeHandler}
        />
        <FloatingInput
          type='email'
          label='Email'
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
        <FloatingInput
          type='password'
          label='Confirm Password'
          name='confirm_password'
          value={data.confirm_password}
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
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
