import React from "react";

const TextBox = (props) => {
  const [isError, setError] = React.useState(false);

  React.useEffect(() => {
    props.error && props.touched ? setError(true) : setError(false);
    }, [props.error, props.touched]);
    
  return (
    <>
      <input
        className={isError ? "error" : null}
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
      {isError ? <p className="text-xs p-0 leading-3 text-red-400">
          {props.error}
          
        </p> : null}
    </>
  );
};

export { TextBox };
