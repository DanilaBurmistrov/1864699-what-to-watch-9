import { Film } from '../../types/types';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../components/video-player/video-player';
import {useRef, useState} from 'react';
import {PLAYER_TIME_OUT} from '../../const';

type FilmCardProps = {
  film: Film,
};

export default function FilmCard({film}: FilmCardProps): JSX.Element {

  const timer = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const onMouseEnter = () => {
    timer.current = window.setTimeout(() => setIsPlaying(isPlaying === film.id ? null : film.id), PLAYER_TIME_OUT);
  };

  const onMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setIsPlaying(null);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer isPlaying = {film.id === isPlaying} film = {film} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}
        </Link>
      </h3>
    </article>
  );
}
