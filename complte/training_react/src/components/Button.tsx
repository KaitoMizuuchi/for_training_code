// import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  // labelはstring型です。

  // const click = () => {
  //   console.log("クリックされました。");
  // };

  return <button onClick={onClick}>{label}</button>;
};

export default Button;
