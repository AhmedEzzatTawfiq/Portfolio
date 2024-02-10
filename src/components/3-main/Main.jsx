import { useState, useMemo, useCallback } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const myProjects = [
  {
    projectTitle: "react project",
    category: ["react"],
    imgPath: "./images/1.jpg",
  },
  {
    projectTitle: "react & css project",
    category: ["react", "css"],
    imgPath: "./images/2.jpg",
  },
  { projectTitle: "css project", category: ["css"], imgPath: "./images/3.jpg" },
  {
    projectTitle: "react project",
    category: ["react"],
    imgPath: "./images/4.jpg",
  },
  { projectTitle: "css project", category: ["css"], imgPath: "./images/5.jpg" },

  {
    projectTitle: "javaScript project",
    category: ["js"],
    imgPath: "./images/6.jpg",
  },
  {
    projectTitle: "node project",
    category: ["node"],
    imgPath: "./images/7.jpg",
  },
  {
    projectTitle: "node project",
    category: ["node"],
    imgPath: "./images/8.jpg",
  },
  {
    projectTitle: "javaScript project",
    category: ["js"],
    imgPath: "./images/9.jpg",
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
      <section className="flex  left-section">
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
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => handleClick("node")}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
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
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
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
