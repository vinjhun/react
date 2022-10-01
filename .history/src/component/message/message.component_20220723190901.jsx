const Message = (props) => {
  const { type, val } = props;
  return (
    <div
      id='toast-simple'
      className='flex items-center p-4 space-x-4 w-full max-w-xs 
                text-gray-500 bg-white rounded-lg divide-x divide-gray-200 
                shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800'
      role='alert'
    >
      ({type === 'error'} ? (
      <svg
        aria-hidden='true'
        class='w-5 h-5'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
          clip-rule='evenodd'
        ></path>
      </svg>
      ): '')
      <div className='pl-4 text-sm font-normal'>{val}</div>
    </div>
  );
};

export default Message;
