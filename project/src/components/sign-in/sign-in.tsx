import { useRef, FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { fetchLogin } from '../../store/api-action';
import { isCheckedAuth } from '../../store/selectors';
import { AuthData } from '../../types/types';
import Logo from '../logo/logo';
import LogoFooter from '../logo-footer/logo-footer';

export default function SignIn(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const authorizationStatus = useAppSelector(isCheckedAuth);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(fetchLogin(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {

      const validPassword = /\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/;
      const validEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!validEmail.test(loginRef.current.value)) {
        setIsEmailValid(false);
        return;
      }
      setIsEmailValid(true);

      if(!validPassword.test(passwordRef.current.value)) {
        setIsPasswordValid(false);
        return;
      }
      setIsPasswordValid(true);

      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Main} /> :
      <div className="user-page">
        <header className="page-header user-page__head">

          <Logo />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
            {!isPasswordValid &&
            <div className="sign-in__message">
              <p>Please enter a valid password. <br /> The password must contain at least one number and one letter. </p>
            </div>}
            {!isEmailValid &&
            <div className="sign-in__message">
              <p>Please enter a valid email address </p>
            </div>}
            <div className="sign-in__fields">
              <div className={`sign-in__field ${!isEmailValid && 'sign-in__field--error'}`}>
                <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field ${!isPasswordValid && 'sign-in__field--error'}`}>
                <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">

          <LogoFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
  );
}
