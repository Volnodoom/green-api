import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6em 1.3em;

  color: ${({theme}) => theme.color.whitePure};
  background-color: ${({theme}) => theme.color.green};
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.4em;

  :hover {
    background-color: ${({theme}) => theme.color.greenAccent};
   }

  :active {
    opacity: 0.4;
   }

  font-size: 1.125rem;
`;
