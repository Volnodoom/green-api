import styled from "styled-components";
import { Button } from "../../components/styled-elements/button";
import DecorSpin from "../../assets/img/decor-login-one.svg"

const LoginWrapper = styled.div`
  margin: auto;

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    margin: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;

    ::before{
      position: absolute;
      content: '';
      inset: auto 50% 0;
      transform: translate(-50%, -17.6em);
      width: 115em;
      height: 115em;
      z-index: 200;


      border-radius: 50%;
      background-color:red;
      background-color: ${({theme}) => theme.color.greySmoky};
    }

    ::after{
      position: absolute;
      content: '';
      inset: -5.75em auto auto -4em;
      inset:0;
      z-index: 300;

      background-image: url(${DecorSpin});
      background-repeat: no-repeat;
    }
  }

  @media (min-width: 1400px) {
    width: 90em;
    margin: auto 0;
    overflow: hidden;
  }
`;

const LoginContent = styled.div`
  padding: 8em 2.5em 2.5em;

  @media (min-width: 1100px) {
    margin: 8.25em 11.25em 12.75em;
    padding: 3em 4em;
    width: 45em;
    z-index: 400;

    border-radius: 1.5em;
    border: 1px solid ${({theme}) => theme.color.greySecondary};
    background-color: rgba(245, 245, 245, 0.46);
    box-shadow: 0px 100px 80px rgba(49, 49, 49, 0.1);

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
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

const LoginForm = styled.form`
  @media (min-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;

  @media (min-width: 1100px) {
    width: auto;
    padding-inline: 3em;
    margin-inline: auto;
    align-self: center;
  }
`;

export {
  LoginWrapper,
  LoginContent,
  LoginLogo,
  LoginText,
  LoginForm,
  LoginButton,
}
