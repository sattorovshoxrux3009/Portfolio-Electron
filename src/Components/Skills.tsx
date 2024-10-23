import "./Skills.css"
import html from "../../public/Html.png"
import css from "../../public/Css.png"
import sass from "../../public/SassC.png"
import bootstrap from "../../public/bootstrap.png"
import tailwand from "../../public/tailwand.png"
import javascript from "../../public/JS.png"
import react from "../../public/Reactt.png"
import vite from "../../public/vite.png"
import git from "../../public/git.png"
import {  motion } from 'framer-motion'
import { useTranslation } from "react-i18next"

interface ImageItem {
    text: string;
    src: string;
  }
  
  interface WordItem {
    key: number;
    word: string;
  }
  
  const Skills: React.FC = () => {
    const { t } =useTranslation();

    const images: ImageItem[] = [
      { text: "Html", src: html },
      { text: "Css", src: css },
      { text: "Sass", src: sass },
      { text: "Bootstrap", src: bootstrap },
      { text: "Tailwind", src: tailwand },
      { text: "JavaScript", src: javascript },
      { text: "React", src: react },
      { text: "Vite", src: vite },
      { text: "Git", src: git },
    ];
    const words: WordItem[] = [
      {
        key:1,
        word: t("experience1"),
      },
      {
          key:2,
          word: t("experience2"),
      },
      {
          key:3,
          word: t("experience3"),
      },
      {
          key:4,
          word: t("experience4"),
      },
      {
          key:5,
          word: t("experience5"),
      }
    ];
    return (
      <section id="skills" className="skills">
        <div className="container">
          <h1 className="skills-title">Ko'nikmalar va tajriba</h1>
          <div className="skills-center">
            <ul className="skills-list">
              {images.map((item, index) => (
                <motion.li
                  whileInView={{ y: [100, 1] }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={index}
                  className="skills-item"
                >
                  <img className="skills-img" src={item.src} alt={item.text} />
                  <p className="skills-text">{item.text}</p>
                </motion.li>
              ))}
            </ul>
            <motion.h1
              whileInView={{ y: [100, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-subtitle"
            >
              Sent 2023 - Apr 2024
            </motion.h1>
            <div className="skills-right">
              <h1 className="skills-subtitles">Frontend Dasturchi</h1>
              <p className="skills-letters">Toshkentdagi IT Time akademiyasi</p>
              {words.map((word) => (
                <motion.p
                  key={word.key}
                  whileInView={{ y: [100, 1] }}
                  transition={{ duration: 0.5 }}
                  className="skills-words"
                >
                  {word.word}
                </motion.p>
              ))}
            </div>
          </div>
          <h1 className="skills-copyright">@2024 Sattorov Shohruh</h1>
        </div>
      </section>
    );
  };

export default Skills
