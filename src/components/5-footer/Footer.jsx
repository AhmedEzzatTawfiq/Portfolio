import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Uses</a>
          </li>
        </ul>
      </nav>

      <p>© 2024 Ezzat • All rights reserved.</p>
    </footer>
  );
};

export default Footer;
