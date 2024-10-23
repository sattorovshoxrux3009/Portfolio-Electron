import "./Navbar.css"
import { motion ,} from 'framer-motion';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import { useState,useEffect } from 'react';

  const Navbar: React.FC = () => {    
  const {t,i18n}=useTranslation();

  const [language,setLanguage]=useState<string | null>(localStorage.getItem("i18nextLng"))
  const [toggle,setToggle]=useState(false)


  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language); 
    }
  }, [language]);

    return (
      <nav className='navbar'>
        <div className="container">
            <h3 className="navbar-title">Sattorov</h3>
            <div className="navbar-middle">
              <a href="#home" className="navbar-link">{t("home")}</a>
              <a href="#skills" className="navbar-link">{t("skills")}</a>
              <a href="#mywork" className="navbar-link">{t("mywork")}</a>
              <a href="#contact" className="navbar-link">{t("contact")}</a>
            </div>
            <ul className="navbar-languages">
              <li className={language=="en" ? "active":""} onClick={()=>setLanguage('en')}>EN</li>
              <li className={language=="ru" ? "active":""} onClick={()=>setLanguage('ru')}>RU</li>
              <li className={language=="uz" ? "active":""} onClick={()=>setLanguage('uz')}>UZ</li>
            </ul>
            <div className="navbar-mobile">
              <HiMenuAlt4 onClick={()=>setToggle(true)}/>
              {toggle &&(
                <motion.div initial={{ x: 300}} animate={{x: 0}} transition={{ duration: 0.5, ease: "easeOut" }} className='navbar-mobile-wrapper'>
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                    {["home", "skills", "mywork", "contact"].map(item => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {t(`${item}`)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
        </div>    
    </nav>

    );
  };


export default Navbar