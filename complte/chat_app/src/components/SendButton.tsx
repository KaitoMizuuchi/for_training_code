type ButtonProps = {
  width: string;
  className?: string;
  label: string;
};

const SendButton = ({ width, className, label }: ButtonProps) => {
  return (
    <button type="submit" style={{ width }} className={`c-btn ${className}`}>
      {label}
    </button>
  );
};

export default SendButton;
