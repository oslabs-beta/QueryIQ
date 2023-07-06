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
      className="rounded-lg border border-gray-900 p-2 w-5/6 h-33 text-slate-900 text-xl"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default ModalFormInput;
