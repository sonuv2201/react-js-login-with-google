import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginButton from './LoginButton';
import LoginCustomButton from './LoginCustomButton';
import Logout from './Logout';
const LoginWithGoogle = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_LOGIN_GOOGLE_API}>
      <LoginButton />
      <LoginCustomButton />
      <Logout />
    </GoogleOAuthProvider>
  )
}

export default LoginWithGoogle;