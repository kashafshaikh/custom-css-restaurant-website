import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <main className="footer">
      <p className="footer-heading">Stay Connected With My Work:</p>

      <div className="footer-icons">
        <a href="mailto:billushaikhshaikh@gmail.com" className="icon-link">
          <AiOutlineMail className="icons" />
          Email
        </a>

        <a
          href="https://github.com/kashafshaikh"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <AiFillGithub className="icons" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/kashaf-zeeshan-5756022b5"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <AiFillLinkedin className="icons" />
          LinkedIn
        </a>
      </div>

      <p className="footer-copy">&copy; 2024 Kashaf. All Rights Reserved.</p>
    </main>
  );
}
