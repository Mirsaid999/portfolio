import './Header.css';
import bgVideo from "../../assets/video/bg.mp4";
import { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const words = ['a Frontend Developer', 'a Creative Coder'];
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[index];
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <h1 className="header__title-medium">
      <span>{text}</span>
      <span className="cursor">|</span>
    </h1>
  );
};

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = `${newTheme}-theme`; 
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${theme}`}>
        <nav className="nav">
          <div className="nav__content container">
            <a href="" className="nav__logo">
              Mirsaid
            </a>

            <div className={`burger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

            <ul className={`nav__list ${menuOpen ? "active" : ""}`}>
              <li>
                <a
                  href="aboutme"
                  className="nav__list-link"
                  onClick={(e) => handleScrollToSection(e, 'aboutme')}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="skills"
                  className="nav__list-link"
                  onClick={(e) => handleScrollToSection(e, 'skills')}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="myworks"
                  className="nav__list-link"
                  onClick={(e) => handleScrollToSection(e, 'myworks')}
                >
                  My works
                </a>
              </li>
              <li>
                <a
                  href="contacts"
                  className="nav__list-link"
                  onClick={(e) => handleScrollToSection(e, 'contacts')}
                >
                  Contacts
                </a>
              </li>
            </ul>

            <div className="nav__button">
              <div className="wrapper">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="switch"
                  onChange={handleThemeChange}
                  checked={theme === 'dark'}
                />
              </div>

              <div className="wrapper-mini">
<div className="theme-switch">
  <input type="checkbox" 
  id="theme-checkbox" 
  onChange={handleThemeChange}
  checked={theme === 'dark'}
  />
  <label for="theme-checkbox">
    <div></div>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        ></path>
      </svg>
    </span>
  </label>
</div>

              </div>
            </div>

          </div>
        </nav>

        <video
          className="video-background"
          style={{
            filter: theme === 'light' ? 'none' : 'brightness(50%)',
          }}
          playsInline
          autoPlay
          loop
          muted
          controlsList='nodownload noremoteplayback noplaybackrate'
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className={show ? 'slide-in header__content container' : 'header__content container'}>
          <div className="header__title-span">
            <h1 className='header__title'>Hi !</h1>
            <h1 className="header__title-mediums">
              I'm <samp>Mirsaid</samp>
            </h1>
            <TypingEffect />
            <p className="header__descr">
              I'm a passionate developer with a focus on creating modern and intuitive experiences. I strive for excellence, constantly study new technologies, and implement complex projects with attention.
            </p>

            <div className="btn">
              <button className="header-btns">
                <span>Hire me</span>
              </button>
              <button className="header-btns">
                <span>Let's talk</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
