import { Film } from '../../types/types';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState} from 'react';
import {PLAYER_TIME_OUT} from '../../const';

type FilmCardProps = {
  film: Film,
};

let timer: number | null = null;

export default function FilmCard({film}: FilmCardProps): JSX.Element {

  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const onMouseEnter = () => {
    timer = window.setTimeout(() => setIsPlaying(isPlaying === film.id ? -1 : film.id), PLAYER_TIME_OUT);
  };

  const onMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setIsPlaying(null);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <VideoPlayer isPlaying = {film.id === isPlaying} film = {film} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}
        </Link>
      </h3>
    </article>
  );
}
