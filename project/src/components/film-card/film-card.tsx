import { Film } from '../../types/types';
import { Link, useNavigate } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useEffect, useRef, useState} from 'react';
import { PLAYER_TIME_OUT} from '../../const';

type FilmCardProps = {
  film: Film,
};

export default function FilmCard({film}: FilmCardProps): JSX.Element {

  const timer = useRef<number | null>(null);
  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  const handleMouseEnter = () => {
    timer.current = window.setTimeout(() => setIsPlaying(isPlaying === film.id ? null : film.id), PLAYER_TIME_OUT);
  };

  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setIsPlaying(null);
  };

  useEffect(() => () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate(`/films/${film.id}`)}
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
