import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.75em 0.6em;

  border-radius: 1.625em;
  background-color: ${({theme, isShown}) => isShown ? theme.color.greySecondary : 'transparent'};
  border: 1px solid ${({theme, isShown}) => isShown ? theme.color.border : theme.color.greySecondary};


  :focus {
    outline: none;
  }

  :focus-visible {
    border: 1px solid ${({theme}) => theme.color.blackText};
    outline: none;
  }

  @media (min-width: 1100px) {
    width: 50%;
    border: 1px solid ${({theme, isShown}) => isShown ? theme.color.border : theme.color.green};
    background-color: ${({theme, isShown}) => isShown ? theme.color.whitePure : 'transparent'};
  }
`;

export default Input;
