import React from 'react';
import type { ModalFormInputProps } from '~/types/types';

const ModalFormInput: React.FC<ModalFormInputProps> = ({
  placeholder,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      className="rounded-sm border border-gray-900 p-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default ModalFormInput;
