import Logo from '../logo/logo';
import LogoFooter from '../logo-footer/logo-footer';

export default function InternalServerError(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
      </header>
      <div>
        <div style={{marginBottom: 40}}>
          <h1 className="page-title" style={{textAlign: 'center'}}>500 Internal Server Error</h1>
        </div>
      </div>
      <LogoFooter />
    </div>
  );
}
