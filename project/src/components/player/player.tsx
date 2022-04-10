import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { browserHistory } from '../../browser-history';
import { useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-action';
import { getFilmById } from '../../store/selectors';
import { getVideoTimeLeft } from '../../utils';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';


export default function Player(): JSX.Element {

  const params = useParams();
  const filmId = Number(params.id);
  const film = useAppSelector(getFilmById(filmId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [dispatch, filmId]);

  const [playing, setPlaying] = useState(false);

  const [videoFullTime, setVideoFullTime] = useState(0);

  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  const [videoProgress, setVideoProgress] = useState(0);

  const videoPlayerRef = useRef() as MutableRefObject<HTMLVideoElement>;

  const [isVideoLoading, setIsVideoLoading] = useState(false);

  if(videoPlayerRef.current) {
    const video = videoPlayerRef.current;

    video.onloadstart = () => {
      setIsVideoLoading(true);
    };

    video.onloadeddata = () => {
      setIsVideoLoading(false);
    };
  }

  useEffect(() => {
    setVideoFullTime(videoPlayerRef.current.duration);
    videoPlayerRef.current.play().then(() => {
      setPlaying(true);
    });
  }, []);

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
    videoPlayerRef.current.ontimeupdate = (evt) => {

      const dur = videoPlayerRef.current ? videoPlayerRef.current.duration : 0;

      setVideoFullTime(dur);
      setVideoCurrentTime(videoPlayerRef.current?.currentTime);
      setVideoProgress(((videoPlayerRef.current?.currentTime) / videoFullTime) * 100);
    };
  }

  useEffect(() => {
    setVideoFullTime(videoPlayerRef.current.duration);
    videoPlayerRef.current.play();
    return () => {
      setVideoFullTime(0);
    };
  }, []);

  function handlePlayerExit() {
    browserHistory.back();
  }

  function handleFullScreen() {

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoPlayerRef.current.requestFullscreen();
    }
  }

  return (
    <div className="player">
      <video ref={videoPlayerRef} src={film?.videoLink} muted className="player__video" poster={film?.posterImage}></video>

      {isVideoLoading ? <LoadingSpinner /> : ''}

      <button type="button" className="player__exit"
        onClick={handlePlayerExit}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress || 0} max="100"></progress>
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

          <button type="button" className="player__full-screen" onClick={handleFullScreen}>
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
