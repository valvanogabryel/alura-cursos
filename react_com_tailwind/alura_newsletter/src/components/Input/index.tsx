interface InputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  isRequired?: boolean;
  min?: number;
};

const Input: React.FC<InputProps> = ({ type, placeholder, isRequired, min }) => {
  return <input
    type={type}
    className='p-3 text-lg rounded mb-4 bg-gray-100 duration-100 dark:bg-dark-100 dark:text-white hover:border-b-2 focus:outline-none focus:border-b-4 dark:border-b-gray-400 focus:invalid:placeholder:text-red-300'
    min={10}
    minLength={min}
    placeholder={placeholder}
    required={isRequired}
  />;
}

export default Input;