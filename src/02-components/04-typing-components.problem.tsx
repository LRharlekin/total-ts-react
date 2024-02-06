import React from "react";

// export type ButtonProps = {
//   className: string;
// };

// export const Button = (props: ButtonProps) => {
export const Button = (props: unknown) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
