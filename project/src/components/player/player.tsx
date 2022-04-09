import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-action';
import { getFilmById } from '../../store/selectors';
import { getVideoTimeLeft } from '../../utils';


export default function Player(): JSX.Element {

  const params = useParams();
  const filmId = Number(params.id);
  const film = useAppSelector(getFilmById(filmId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [dispatch, filmId]);

  const [playing, setPlaying] = useState(true);

  const [videoFullTime, setVideoFullTime] = useState(0);

  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  const [videoProgress, setVideoProgress] = useState(0);

  const videoPlayerRef = useRef() as MutableRefObject<HTMLVideoElement>;

  function handleVideoPlayPauseClick(control: string) {
    if (control === 'play') {
      videoPlayerRef.current.play();
      setPlaying(true);
    } else if (control === 'pause') {
      videoPlayerRef.current.pause();
      setPlaying(false);
    }
  }

  if(videoPlayerRef.current) {
    videoPlayerRef.current.ontimeupdate = () => {
      setVideoFullTime(videoPlayerRef.current.duration);
      setVideoCurrentTime(videoPlayerRef.current?.currentTime);
      setVideoProgress((videoPlayerRef.current?.currentTime / videoFullTime) * 100);
    };
  }

  useEffect(() => {
    setVideoFullTime(videoPlayerRef.current.duration);
    videoPlayerRef.current.play();

  }, []);

  function handlePlayerExit() {
    browserHistory.back();
  }

  function toggleFullScreen() {

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoPlayerRef.current.requestFullscreen();
    }
  }


  return (
    <div className="player">
      <video ref={videoPlayerRef} src={film?.videoLink} className="player__video" poster={film?.posterImage}></video>

      <button type="button" className="player__exit"
        onClick={handlePlayerExit}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value"> {(videoFullTime && videoCurrentTime) ? getVideoTimeLeft(videoFullTime, videoCurrentTime) : '0:00:00'}</div>
        </div>

        <div className="player__controls-row">
          {playing ? (
            <button type="button" className="player__play" onClick={() => handleVideoPlayPauseClick('pause')}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={() => handleVideoPlayPauseClick('play')}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

          <div className="player__name">{film?.name}</div>

          <button type="button" className="player__full-screen" onClick={toggleFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
