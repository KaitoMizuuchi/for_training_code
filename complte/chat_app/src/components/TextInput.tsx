import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ChangeEvent } from "react";

type TextInputProps = {
  type: string;
  id: string;
  className?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  togglePassOpen?: () => void;
  errorMsg: string;
  isPassword?: boolean;
};

const TextInput = ({
  type,
  id,
  className,
  placeholder,
  value,
  onChange,
  togglePassOpen,
  errorMsg,
  isPassword,
}: TextInputProps) => {
  return (
    <div className="c-input">
      <input
        type={type}
        id={id}
        className={`c-input__field ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* idがパスワードの場合は目隠しボタンを設置 */}
      {isPassword ? (
        <IconButton
          sx={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={togglePassOpen}
        >
          {type === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      ) : null}
      {/* エラーメッセージの有無 */}
      {errorMsg !== "" ? <p className="c-input__error">{errorMsg}</p> : null}
    </div>
  );
};

export default TextInput;
