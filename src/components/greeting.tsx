import React from "react";

const Greeting = (props: {
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <p>Hi {props.name}!</p>;
};

export default Greeting;
