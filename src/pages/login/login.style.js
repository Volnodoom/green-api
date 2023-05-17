import styled from "styled-components";
import { Button } from "../../components/styled-elements/button";

const LoginWrapper = styled.div`
  padding: 8em 2.5em 2.5em;
`;

const LoginLogo = styled.img`
  margin: 0 auto 5em;
  width: 13.13em;
  height: 13.13em;
`;

const LoginText = styled.h1`
  margin-bottom: 3.25em;

  font-size: 1.375rem;
  font-weight: 700;
  text-align: center;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

export {
  LoginWrapper,
  LoginLogo,
  LoginText,
  LoginButton,
}
