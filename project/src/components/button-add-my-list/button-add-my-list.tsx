import { useAppDispatch } from '../../hooks';
import { changeMyListStatus } from '../../store/api-action';


type ButtonAddMyListProps = {
  filmIsFavorite: boolean | undefined,
  filmId: number | undefined,
}

export function ButtonAddMyList({filmIsFavorite, filmId}: ButtonAddMyListProps): JSX.Element {

  const dispatch = useAppDispatch();

  function changeIsFavoriteStatus(status: number) {
    if(filmId) {
      dispatch(changeMyListStatus({filmId, status}));
    }
  }

  return (
    !filmIsFavorite ?
      <button className="btn btn--list film-card__button" type="button" onClick={() => changeIsFavoriteStatus(1)}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button> :
      <button className="btn btn--list film-card__button" type="button" onClick={() => changeIsFavoriteStatus(0)}>
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
  );
}
