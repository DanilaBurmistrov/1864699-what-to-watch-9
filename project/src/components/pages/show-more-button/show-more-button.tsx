type ShowMoreButtonProps = {
  onClickCb: () => void;
}

export function ShowMoreButton({onClickCb}: ShowMoreButtonProps): JSX.Element {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evt) => onClickCb()}>
            Show more
      </button>
    </div>
  );
}
