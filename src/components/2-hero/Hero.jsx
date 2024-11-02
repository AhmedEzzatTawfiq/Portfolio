import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {

  return (
    <section id="about" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./mee.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Ahmed Ezzat Tawfiq
        </motion.h1>

        <p className="sub-title">
          A Front-End Web Developer based in Damietta, Egypt.
        </p>

        <div className="all-icons flex">
          <a href="https://wa.me/201202770788" target="blank" className="icon-watsap" ><FontAwesomeIcon icon={faWhatsapp} /></a>
          {/* <a href="https://www.instagram.com/ahmed_ezzat_tawfiq?igsh=MTRsYmYzcDkwNmlieg==" target="blank" className="icon icon-instagram"></a> */}
          <a href="https://github.com/AhmedEzzatTawfiq" target="blank" className="icon icon-github"></a>
          <a href="https://www.linkedin.com/in/ahmed-ezzat-tawfiq/" target="blank" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          className=""
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
