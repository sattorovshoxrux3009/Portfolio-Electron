import './Works.css'
import { motion,easeOut } from "framer-motion"

import dorixonalar from '../../public/Dorixonalar.png'
// import construction from '../img/construction.png'
import dezinfeksiya from '../../public//dezinfeksiya.png'
import furniture from '../../public/Furniture.png'
import avion from '../../public/Avion.png'
import { useTranslation } from 'react-i18next'

function Works() {
    const { t } = useTranslation();  

    const data=[
          {
              title:t("pharmacies"),
              date: t("pharmaciesDate"),
              text: t("pharmaciesText"),
              stacks:'Html, Css, Bootstrap, Javascript',
              link: 'https://dorixonalar.netlify.app/',
              githubLink:'https://github.com/sattorovshoxrux3009/Dorixonalar',
              img: dorixonalar,
          },
          {
              title: t("disinfection"),
              date: t("disinfectionDate"),
              text: t("disinfectionText"),
              stacks:'Html, Css, Javascript, Git',
              link: 'https://dezinfeksiya-tashkent.netlify.app/',
              githubLink:'https://github.com/sattorovshoxrux3009/Dezinfeksiya_Tashkent',
              img: dezinfeksiya,
          },
          {
              title: t("furniture"),
              date: t("furnitureDate"),
              text: t("furnitureText"),
              stacks:'React, Vite, SCSS, JSON',
              link: 'https://furnitures-app.netlify.app/',
              githubLink:'https://github.com/sattorovshoxrux3009/Furnitures',
              img: furniture,
          },
          {
              title: t("avion"),
              date: t("avionDate"),
              text: t("avionText"),
              stacks:'React, Vite, SCSS, JSON',
              link: 'https://avion-product.netlify.app/',
              githubLink:'https://github.com/sattorovshoxrux3009/Avion',
              img: avion,
          }
    ]  
  return (
    <section id='mywork' className='works'>
        <div className="container">
            <motion.h1 whileInView={{ y:[100, 1] }} transition={{ duration:0.5 , ease:easeOut}} className="works-title"><span className='black'></span>{t("mywork")}</motion.h1>
            <ul className="works-list">
                {data.map((datas,index)=>(
                    <motion.li 
                        key={index} 
                        whileInView={{ y:[100, 1] }} 
                        transition={{ duration:0.5 , ease:easeOut}} 
                        className="works-item">
                            <span>
                                <h1 className="works-subtitle">{datas.title}</h1>
                                <p className="works-text">{datas.date}</p>
                                <p className="works-text">{datas.text}</p>
                                <p className="works-letter">{t("stack")}</p>
                                <h3 className="works-words">{datas.stacks}</h3>
                                <span className="works-links">
                                    <button className="works-lnk"><a target='_blank' href={datas.link} >{t("visit")}</a></button>
                                    <button className="works-lnk"><a target='_blank' href={datas.githubLink} >{t("gitrepo")}</a></button>
                                </span>
                            </span>
                            <img className='works-img' src={datas.img} alt="" />
                    </motion.li>
                ))}
            </ul>
            <h3 className="works-copyright">@2024 Sattorov Shohruh</h3>
        </div>
    </section>
  )
}

export default Works
