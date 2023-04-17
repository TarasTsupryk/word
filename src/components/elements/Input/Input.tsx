import React, { useState, useCallback, useEffect } from "react";
import { StyledInput } from "./Input.styles";

interface Props {
  value?: string;
  onChangeValue?: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ value, onChangeValue, placeholder }) => {
  const [currentValue, setCurrentValue] = useState<string | undefined>("");

  const handleChangeValue = useCallback(
    (value: string) => {
      setCurrentValue(value);
      if (onChangeValue) {
        onChangeValue(value);
      }
    },
    [onChangeValue]
  );

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={currentValue}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleChangeValue(event.target.value)
      }
    />
  );
};

export default Input;
