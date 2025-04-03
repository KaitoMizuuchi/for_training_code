import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="l-header">
      <p className="l-header__title">チャットアプリ</p>
      <nav className="l-header__nav">
        <ul className="l-header__nav-list">
          <li className="l-header__nav-item">
            <Link to="/login" className="l-header__nav-link">
              ログイン
            </Link>
          </li>
          <li className="l-header__nav-item">
            <Link to="/chat" className="l-header__nav-link">
              チャット
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
