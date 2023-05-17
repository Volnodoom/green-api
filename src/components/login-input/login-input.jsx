import { useEffect, useState } from "react";
import Input from "../styled-elements/input";
import InputWrapper from "../styled-elements/input-wrapper";
import Label from "../styled-elements/label";

const LoginInput = ({labelName, formName}) => {
  const [isShown, setIsShown] = useState(false);
  const [currentContent, setCurrentContent] = useState('');

  const hasContent = Boolean(currentContent);

  useEffect(() => {
    if(hasContent) {
      setIsShown(true);
    }
  }, [hasContent]);

  const handleFocus = () => setIsShown(true);
  const handleBlur = () => {
    if(hasContent) {
      return;
    }

    setIsShown(false)
  };
  const handleChange = (evt) => {
    setCurrentContent(evt.target.value);
  }

  return(
    <InputWrapper>
      <Label isShown={isShown} htmlFor={formName}>{labelName}</Label>
      <Input
        isShown={isShown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        name={formName}
        id={formName}
        required
      />
    </InputWrapper>
  );
};

export default LoginInput;
