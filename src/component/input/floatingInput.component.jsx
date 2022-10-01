const FloatingInput = (props) => {
  const { type, name, value, label, required, changeHandler } = props;

  return (
    <div className='relative z-0 w-full mb-6 group'>
      <input
        type={type}
        name={name}
        value={value}
        placeholder=' '
        required={required}
        onChange={changeHandler}
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                        dark:text-white dark:border-gray-600 dark:focus:border-white-500 focus:outline-none
                        focus:ring-0 focus:border-white-600 peer'
      />
      <label
        htmlFor={name}
        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
                          -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                          peer-focus:text-white-600 peer-focus:dark:text-white-500 
                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
