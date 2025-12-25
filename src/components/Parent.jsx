import React from "react";

const Parent = ({ children }) => {
  console.log(children);

  return (
    <>
      <h1 className="text-3xl text-center">Parent Component Start</h1>
      {children}
      {/* {React.Children.map(children, (child) =>
        child.props.id === 2 ? child : null
      )} */}
      <h1 className="text-3xl text-center">Parent Component END</h1>
    </>
  );
};

export default Parent;
