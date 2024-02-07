import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

export const Button = ({ className, ...rest }: {}) => {
  // export const Button = (props: ButtonProps) => {
  // const { className, ...rest } = props;
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
