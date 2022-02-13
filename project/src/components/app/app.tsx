import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  settings: {
    title: string;
    genre: string;
    year: number;
    }
}

export default function App({settings}: AppScreenProps): JSX.Element {
  return (
    <MainScreen settings={settings}/>
  );
}
