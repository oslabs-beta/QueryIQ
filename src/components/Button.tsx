import React, { HTMLAttributes } from 'react';

interface ButtonProps {
  btnStyle: <T>(props: T) => T;
}

const Button: React.FC = (props: ButtonProps, children) => {
  const { btnStyle } = props;

  return (
    <>
      <button className={btnStyle}>{children}</button>
    </>
  );
};

export default Button;
