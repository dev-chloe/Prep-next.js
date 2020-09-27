import { useState } from 'react';

const Custominput = ({ 
  type = 'text',
  name, 
  placeholder = '', 
  value, 
  onChange = () => {},
  onBlur = () => {} 
}) => {
  const [error, setError] = useState('');

  const handleBlur = () => {
    const isValid = onBlur && onBlur(value);
    isValid ? setError('') : setError(`invalid ${name}`)
  }

  return (
    <div className="custom_input">
      <input 
        type={type} // text, email or password
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      ></input>
      { error && <div className="error">{error}</div>}
    </div>
  )
}

export default Custominput;