import { RedirectType, redirect } from 'next/navigation';

const AuthenticationPage = () => {
  redirect('/authentication/sign-in', RedirectType.replace);
};

export default AuthenticationPage;
