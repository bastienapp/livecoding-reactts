import React, { ReactElement, useState } from 'react';

interface Props {
  type: string;
  placeholder?: string;
}

function InputField({ type, placeholder = '' }: Props): ReactElement {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <br />
      <span>{value}</span>
    </div>
  );
}

export default InputField;
