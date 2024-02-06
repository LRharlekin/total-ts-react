import React from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button = (props: Props) => {
  // React.FC does not expect specific props by default, so the <Props> need to be passed to the function if props is to infer from type Props!
  // export const Button: React.FC<Props> = (props) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
