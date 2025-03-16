export default function Header(params) {
  return (
    <header className="header">
      <img
        className="logo-width"
        src="./react-logo.png"
        alt="react-logo"
        srcset=""
      />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
