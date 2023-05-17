import * as S from "./login.style";
import Logo from "../../assets/img/logo.png";
import LoginInput from "../../components/login-input/login-input";
import { LoginForm } from "../../utils/constants";

const Login = () => {

  return(
    <S.LoginWrapper>
      <S.LoginContent>
        <S.LoginLogo src={Logo} alt="Chatify logo" />
        <S.LoginText>Sign in to your Account</S.LoginText>
        <S.LoginForm>
          <LoginInput
            labelName={LoginForm.idInstance.label}
            formName={LoginForm.idInstance.forma}
          />
          <LoginInput
            labelName={LoginForm.apiTokenInstance.label}
            formName={LoginForm.apiTokenInstance.forma}
          />
          <S.LoginButton type="submit">Send message</S.LoginButton>
        </S.LoginForm>
      </S.LoginContent>
    </S.LoginWrapper>
  );
};

export default Login;
// Send Message On WhatsApp with Green-Api service
