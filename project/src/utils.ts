import { FilmTextRating } from './const';

export function getVideoTimeLeft(fullTime: number, currentTime: number) {

  const timeLeft = fullTime - currentTime;
  const hoursLeft = Math.trunc(timeLeft / 3600);
  const minutesLeft = timeLeft - hoursLeft * 3600;
  const padMinLeft = () => (`0${Math.floor(minutesLeft / 60)}`).slice(-2);
  const padTimeLeft = () => (`0${  Math.floor(timeLeft % 60)}`).slice(-2);

  if (hoursLeft) {
    return  `-${(`0${hoursLeft}`).slice(-2)}:${padMinLeft}:${padTimeLeft}`;
  }
  return  `-${padMinLeft}:${padTimeLeft}`;
}

export function getTextRating(rating: number) {
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
