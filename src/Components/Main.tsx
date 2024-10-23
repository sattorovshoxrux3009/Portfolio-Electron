import React from 'react';
import './Main.css';
import img from '../../public/man.png'; 
import react from '../../public/react.png';
import redux from '../../public/redux.png';
import sass from '../../public/sass.png';
import telegram from '../../public/telegram.png';
import linkedin from '../../public/linkedin.png';
import { motion } from 'framer-motion';
import resume from '../Resume.pdf';
import { useTranslation } from "react-i18next"


const Main: React.FC = () => {
  const { t }=useTranslation();
  return (
    <section id="home" className="main">
      <div className="container">
        <motion.div
         whileInView={{ x: [-100, 0] , opacity: [0, 1]}}
         transition={{ duration: 0.5 }}>
          <ul className="main-list">
            <li className="main-items">
              <p className="main-logo">👋</p>
              <span>
                <p className="main-text">{t("hello")}</p>
                <h3 className="main-title">{t("shohruh")}</h3>
              </span>
            </li>
            <li className="main-items">
              <p className="main-text">{t("frontend")}</p>
            </li>
            <button className="main-items button"><a download={"Sattorov_Shohruh_Resume"} href={resume}>{t("download")}</a></button>
          </ul>
        </motion.div>
        <motion.img whileInView={{ scale: [0, 1]  }} transition={{ duration: 1, ease: "easeInOut" }} src={img} alt=""  className="main-hero"/>
        <motion.div whileInView={{ scale: [0, 1] }}transition={{ duration:0.5, ease: "easeInOut" }} className="main-icons">
          <img src={redux} alt=""className="main-icon"/>
          <img src={react} alt=""className="main-icon"/>
          <img src={sass} alt="" className="main-icon"/>
        </motion.div>
        <div className="sublinks">
          <a target="_blank" href="https://t.me//sattorov_shoxrux"><img src={telegram} alt="" className="sublink" /></a>
          <a target="_blank" href="https://www.linkedin.com/in/shohruh-sattorov-4a821b2b3"><img src={linkedin} alt="" className="sublink" /></a>
        </div> 
      </div>
    </section>
  );
}

export default Main;
