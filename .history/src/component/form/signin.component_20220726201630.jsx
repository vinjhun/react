import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FirebaseAuthUtil } from '../../util/firebase/firebase-auth';
import { createUserFromAuth } from '../../util/firebase/fire-store';
import { UserContext } from '../../context/user.context';

import FloatingInput from '../input/floatingInput.component';
import Message from '../message/message.component';

const formData = {
  display_name: '',
  email: '',
  password: '',
  confirm_password: '',
  msg: { type: '', val: '' },
};

const SignInForm = () => {
  const [data, setFormData] = useState(formData);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();


  const logIn = async (event) => {
    event.preventDefault();

    try {
      const response = await FirebaseAuthUtil.signInGoogleWithPopUp();
      if (response) {
        const { type } = await createUserFromAuth(response);

        if (type === 'info' || type === 'warning') {
          setFormData({
            ...data,
            ...formData,
            msg: { type: 'info', val: 'Sign In Successfully' },
          });

          setUser(response.user);
          navigate('story')
        }
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

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await FirebaseAuthUtil.signInWithEmail(data);
      if (response) {
        const { type } = await createUserFromAuth(response);

        if (type === 'info' || type === 'warning') {
          setFormData({
            ...data,
            ...formData,
            msg: { type: 'info', val: 'Sign In Successfully' },
          });

          setUser(response.user);
        }
      }
    } catch (err) {
      setFormData({
        ...data,
        ...formData,
        msg: { type: 'error', val: err.message },
      });
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        {data.msg.type === 'error' ? (
          <Message type={data.msg.type} val={data.msg.val} />
        ) : (
          ''
        )}
        {data.msg.type === 'info' ? (
          <Message type={data.msg.type} val={data.msg.val} />
        ) : (
          ''
        )}

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
