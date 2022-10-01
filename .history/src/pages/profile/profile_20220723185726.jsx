import SignInForm from '../../component/form/signin.component';
import SignUpForm from '../../component/form/signup.component';

const Profile = () => {
  return (
    <div className='flex flex-wrap min-h-[100vh]'>
      <div className='flex flex-col grow'>
        <div className='px-20 py-6 text-2xl italic semi-bold'>
          <h1>Its all where started...</h1>
        </div>
        <div
          className='mx-18 my-6 px-20 py-20 rounded-lg shadow-md shadow-[#A1887F] 
                        dark:shadow-md dark:bg-slate-700 backdrop-blur-md'
        >
          <SignInForm />
        </div>
      </div>
      <div className='grow'>
        <div className='m-2 p-4'>
          <div className='z-0 rounded-full bg-zinc-100 w-60 h-60 absolute right-20'></div>
          <div
            className='mx-20 my-5 px-20 py-20 rounded-lg shadow-md shadow-[#A1887F] 
                          dark:shadow-md dark:bg-slate-700/50 
                          backdrop-blur-md'
          >
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
