import Hero from "./components/Hero";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import About from "./components/About";
import Section from "./components/Section";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AnotherGallery from "./components/AnotherGallery";
import FinalGallery from "./components/FinalGallery";
import Carousel from "./components/Carousel";

function App() {
  const [theme, setTheme] = useState(null);
  const [menu, setMenu] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },

    {
      id: 3,
      link: "section",
    },
    {
      id: 4,
      link: "gallery",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <main className="App bg-white min-h-screen dark:bg-primary-100 dark:text-white relative">
      <header className="px-4 shadow py-2 fixed w-full z-[9999]  h-fit bg-white dark:bg-primary-100 dark:text-white ">
        <nav className="flex justify-between items-center">
          <Link to={links[0].link} smooth duration={500}>
            <img
              src="/assets/img/logo-dark.svg"
              alt="site logo"
              className={`w-20 h-20 object-contain ${
                theme === "light" ? "block" : "hidden"
              }`}
            />
            <img
              src="/assets/img/logo-light.svg"
              alt="site logo"
              className={`w-20 h-20 object-contain ${
                theme === "dark" ? "block" : "hidden"
              }`}
            />
          </Link>

          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="text-lg ml-4 cursor-pointer hover:scale-105 duration-200 text-gray-600 capitalize dark:text-white"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div onClick={handleThemeSwitch} className="hidden md:block">
            {theme === "dark" ? (
              <FaMoon
                size={25}
                className="hover:text-white text-secondary-500"
              />
            ) : (
              <FiSun
                size={25}
                className="text-secondary-500 hover:text-primary-100"
              />
            )}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <div onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <FaMoon
                  size={25}
                  className="hover:text-white text-secondary-500 cursor-pointer"
                />
              ) : (
                <FiSun
                  size={25}
                  className="text-secondary-500 hover:text-primary-100 cursor-pointer"
                />
              )}
            </div>
            <div
              onClick={() => setMenu(!menu)}
              className="cursor-pointer mr-2 "
            >
              {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </nav>

        {menu && (
          <>
            <ul className="flex flex-col border-0 md:hidden absolute top-15 right-0 w-full shadow px-4 bg-white dark:bg-primary-100 dark:text-white font-medium capitalize">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="text-center text-lg my-4 mr-4 cursor-pointer hover:scale-105 duration-200 text-gray-600 dark:text-white"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </header>
      {/* <div className="w-full h-20"> </div> */}
      <div className="w-full overflow-x-hidden">
        <Carousel />
      </div>

      <Hero />
      <About />

      <Section />
      <Gallery />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
