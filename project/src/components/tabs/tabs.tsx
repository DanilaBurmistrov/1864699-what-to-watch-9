import { useParams } from 'react-router-dom';
import { FilmTextRating, TabType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../store/selectors';

type TabsProps = {
  type: TabType;
}

function getTextRating(rating: number) {
  if(rating >= 0 && rating < 3) {
    return FilmTextRating.Bad;
  }
  else if(rating >= 3 && rating < 5) {
    return FilmTextRating.Normal;
  }
  else if(rating >= 5 && rating < 8) {
    return FilmTextRating.Good;
  }
  else if(rating >= 8 && rating < 10) {
    return FilmTextRating.VeryGood;
  }
  else {
    return FilmTextRating.Awesome;
  }
}

export default function Tabs({type}: TabsProps): JSX.Element | null {

  const params = useParams();
  const selectedFilm = useAppSelector(getFilmById(Number(params.id)));

  if (selectedFilm) {
    switch (type) {
      case TabType.Overview:
        return (
          <>
            <div className="film-rating">
              <div className="film-rating__score">{selectedFilm.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{getTextRating(selectedFilm.rating)}</span>
                <span className="film-rating__count">{selectedFilm.scoresCount} ratings</span>
              </p>
            </div>
            <div className="film-card__text">
              <p>
                {selectedFilm.description}
              </p>
              <p>
              </p>
              <p className="film-card__director">
                <strong>Director: {selectedFilm.director}</strong>
              </p>
              <p className="film-card__starring">
                <strong>
                Starring: {selectedFilm.starring.join(', ')}
                </strong>
              </p>
            </div>
          </>
        );
      case TabType.Details:
        return (
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{selectedFilm.director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value">
                  {selectedFilm.starring.map((starring, index) => <span key={starring}>{starring}{index === selectedFilm.starring.length-1 ? '' : ','}<br/></span>)}
                </span>
              </p>
            </div>
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>

                <span className="film-card__details-value">{Math.trunc(selectedFilm.runTime/60)}h {selectedFilm.runTime % 60}m</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{selectedFilm.genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{selectedFilm.released}</span>
              </p>
            </div>
          </div>
        );
      case TabType.Reviews:
        return(
          <div className="film-card__reviews film-card__row">
            <div className="film-card__reviews-col">
              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director &prime; s funniest and most exquisitely designed films in years.</p>

                  <footer className="review__details">
                    <cite className="review__author">Kate Muir</cite>
                    <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                  </footer>
                </blockquote>

                <div className="review__rating">8,9</div>
              </div>

              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">Anderson &prime; s films are too precious for some, but for those of us willing to lose ourselves in them, they &prime; re a delight.  &prime; The Grand Budapest Hotel &prime;  is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                  <footer className="review__details">
                    <cite className="review__author">Bill Goodykoontz</cite>
                    <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                  </footer>
                </blockquote>

                <div className="review__rating">8,0</div>
              </div>

              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">I didn &prime; t find it amusing, and while I can appreciate the creativity, it &prime; s an hour and 40 minutes I wish I could take back.</p>

                  <footer className="review__details">
                    <cite className="review__author">Amanda Greever</cite>
                    <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                  </footer>
                </blockquote>

                <div className="review__rating">8,0</div>
              </div>
            </div>
            <div className="film-card__reviews-col">
              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

                  <footer className="review__details">
                    <cite className="review__author">Matthew Lickona</cite>
                    <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                  </footer>
                </blockquote>

                <div className="review__rating">7,2</div>
              </div>

              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                  <footer className="review__details">
                    <cite className="review__author">Paula Fleri-Soler</cite>
                    <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                  </footer>
                </blockquote>

                <div className="review__rating">7,6</div>
              </div>

              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>

                  <footer className="review__details">
                    <cite className="review__author">Paula Fleri-Soler</cite>
                    <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                  </footer>
                </blockquote>

                <div className="review__rating">7,0</div>
              </div>
            </div>
          </div>
        );
    }
  }

  return null;

}

