

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <div className="avatar"></div>
            <span>Kashish singh</span>
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
