import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchLogout } from '../../store/api-action';
import { getUserLoginData, isCheckedAuth } from '../../store/selectors';


export default function UserBlock(): JSX.Element {

  const userLoginData = useAppSelector(getUserLoginData);

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(isCheckedAuth);

  if(authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img
              src={userLoginData.avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </li>
        <li className="user-block__item">
          <Link to={AppRoute.Main}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(fetchLogout());
            }}
            className="user-block__link"
          >Sign out
          </Link>
        </li>
      </ul>
    );
  }
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      </li>
    </ul>
  );
}
