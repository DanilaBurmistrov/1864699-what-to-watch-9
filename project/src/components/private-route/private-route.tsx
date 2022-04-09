import {Navigate} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppSelector } from '../../hooks';
import { isCheckedAuth } from '../../store/selectors';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(isCheckedAuth);

  return authorizationStatus === AuthorizationStatus.Auth || authorizationStatus === AuthorizationStatus.Unknown ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
