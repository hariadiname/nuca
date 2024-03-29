import React from "react";

const Button = ({ onClick, title, loading }) => {
  if (loading) {
    return <button className="btn btn-primary disable">Loading</button>;
  }
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
