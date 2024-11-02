import { useState, useMemo, useCallback } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import { lazyload } from "react-lazyload";

const myProjects = [
  {
    projectTitle: "Blog3zzat",
    category: ["next", "tailwind", "typescript"],
    imgPath: "./images/8.png",
    description:
      "A blog platform where users can create posts and publish articles. Features include user authentication and premium content.",
    iconLink: "https://blog3zzat.vercel.app",
    githubLink: "https://github.com/AhmedEzzatTawfiq/Blog3zzat",
  },
  {
    projectTitle: "Homyz",
    category: ["react"],
    imgPath: "./images/1.png",
    description:
      "Homyz is a platform for booking premium compounds, offering a seamless experience for users to find their perfect home.",
    iconLink: "https://homyz-hotel.web.app/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/homyz-hotel",
  },
  {
    projectTitle: "AET Shopping",
    category: ["css"],
    imgPath: "./images/6.jpg",
    description:
      "AET Shopping is an e-commerce platform built with HTML and CSS, providing a modern shopping experience.",
    iconLink: "https://ahmedezzattawfiq.github.io/AET-E-commerce/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/AET-E-commerce",
  },
  {
    projectTitle: "Food zone",
    category: ["react", "tailwind"],
    imgPath: "./images/2.png",
    description:
      "Food zone is a food delivery website using React and Tailwind to offer a user-friendly interface.",
    iconLink: "https://my-food-zone-b1f09.web.app/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/food-zone",
  },
  {
    projectTitle: "Login Page",
    category: ["js", "css"],
    imgPath: "./images/3.png",
    description:
      "A simple login page built with JavaScript and CSS for authentication purposes.",
    iconLink: "https://ahmedezzattawfiq.github.io/login/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/login",
  },
  {
    projectTitle: "Admin Dashboard",
    category: ["css", "js"],
    imgPath: "./images/7.png",
    description:
      "Admin Dashboard for managing application data, built with JavaScript and CSS.",
    iconLink: "https://ahmedezzattawfiq.github.io/Admin-Dashboard/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/Admin-Dashboard",
  },
  {
    projectTitle: "Weather App",
    category: ["js", "css"],
    imgPath: "./images/9.png",
    description:
      "A weather website using HTML, CSS, and JavaScript, which allows users to search for current weather conditions in various cities.",
    iconLink: "https://weather-omega-ten-94.vercel.app/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/Weather",
  },
  {
    projectTitle: "Bondi",
    category: ["bootstrap"],
    imgPath: "./images/4.png",
    description:
      "Bondi is a responsive website template built with Bootstrap for a modern web presence.",
    iconLink: "https://ahmedezzattawfiq.github.io/Bondi/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/Bondi",
  },
  {
    projectTitle: "To-do-list",
    category: ["js", "css"],
    imgPath: "./images/5.png",
    description:
      "A to-do list website to help you manage tasks, built with JavaScript and CSS.",
    iconLink: "https://ahmedezzattawfiq.github.io/to-do-list/",
    githubLink: "https://github.com/AhmedEzzatTawfiq/to-do-list",
  },
];

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");

  const filteredProjects = useMemo(() => {
    if (currentActive === "all") return myProjects;
    return myProjects.filter((item) => item.category.includes(currentActive));
  }, [currentActive]);

  const handleClick = useCallback((buttonCategory) => {
    setcurrentActive(buttonCategory);
  }, []);

  return (
    <main className="flex">
      <section id="pro" className="flex  left-section">
        <button
          onClick={() => setcurrentActive("all")}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("typescript")}
          className={currentActive === "typescript" ? "active" : null}
        >
          TypeScript
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => handleClick("next")}
          className={currentActive === "next" ? "active" : null}
        >
          Next
        </button>
        <button
          onClick={() => handleClick("bootstrap")}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={() => handleClick("tailwind")}
          className={currentActive === "tailwind" ? "active" : null}
        >
          Tailwind
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {filteredProjects.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className="card"
            >
              <a href={item.iconLink} target="_blank" rel="noopener noreferrer">
                <img width={266} src={item.imgPath} alt="" loading="lazy" />
              </a>

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">{item.description}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    {/* <a href={item.iconLink} className="icon-link"></a> */}
                    <a
                      href={item.githubLink}
                      target="blank"
                      className="icon-github"
                    ></a>
                  </div>

                  <a className="link flex" target="blank" href={item.iconLink}>
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
