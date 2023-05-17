import styled from "styled-components";

const Label = styled.label`
  position: absolute;
  margin: 0 0 0.25em;
  inset: ${({isShown}) => isShown ? '-1.27em auto auto 0.55em' : '0.75em auto auto 0.55em'};

  opacity: ${({isShown}) => isShown ? 1 : 0.38};
  font-weight: ${({isShown}) => isShown ? 600 : 400};
  transition: inset 0.3s, opacity 0.3s;

  @media (min-width: 1100px) {
    position: static;
    color: ${({theme}) => theme.color.blackText};
    opacity: 1;
    font-weight: 600;
    align-self: center;
  }
`;

export default Label;
