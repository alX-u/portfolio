const MyNavbar = () => {
  return (
    <>
      <nav className="myNavbar">
        {/*Logo*/}
        <div className="logo">ALEJANDRO VERTEL</div>
        {/*Links*/}
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <button className="btn" type="button">
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MyNavbar;
