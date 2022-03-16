import './Header.css';

function Header() {
  return (
    <div className="Content">
      <header className="Header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <text x="0" y="15" fill="red">I love SVG!</text>
          <path fill="#000b76" fill-opacity="1" d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,160C840,149,960,171,1080,197.3C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <h1>Top Secret</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </header>
    </div>
  );
}

export default Header;
