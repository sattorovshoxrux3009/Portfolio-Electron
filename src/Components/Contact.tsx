import  { useState } from 'react';
import './Contact.css';
import { motion, easeOut } from 'framer-motion';
import linkedin from '../../public/linkedin.png';
import telegram from '../../public/telegram.png';
import phone from '../../public/phone.png';
import { useTranslation } from "react-i18next"


// TypeScript interfeysi
interface Contact {
  img: string;
  text: string;
  link: string;
}

const contacts=[
  {
      img: linkedin,
      text: "in/Sattorov-Shohruh-4a821b2b3",
      link: "https://www.linkedin.com/in/shohruh-sattorov-4a821b2b3"
  },
  {
      img: telegram,
      text: 't.me/Sattorov_Shoxrux',
      link: 'https://t.me//sattorov_shoxrux',
  },
  {
      img: phone,
      text: "+ (998) 94 777 47 67",
      link: "tel:+998947774767",
  },
];


function Contact() {

  const { t } = useTranslation();

    const [nameValue,setNameValue]=useState("");
    const [emailValue,setEmailValue]=useState("");
    const [text,setText]=useState("");

    const [succesM,setSuccesM]=useState(false);
    const succesStatus = 200;

    const handleSucces = () =>{
        setSuccesM(!succesM);
        setTimeout(() => {
            setSuccesM(false);
        },5000)
    }

    let bot={
        TOKEN: "6828188723:AAGIW9VZHvexrSVhfmXdPPRwN47-gTQ1Dds",
        chatID: "5055000310",
        message: `Sizga Partfolio saytingiz bo'yicha yangi xabar yo'llandi!
        %0AXabar yuboruvchi ismi: ${nameValue}
        %0AXabar yuboruvchi emaili: ${emailValue}
        %0AXabar: ${text}`,
    };
    function sendMessage(e:any){
      if(e){
        e.preventDefault();
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        })
        .then(
            (success)=>{
                if (success.status == succesStatus) {
                    handleSucces()
                }
            },
            (error)=>{
                console.log(error)
            }
        )
        setNameValue("");
        setEmailValue("");
        setText("");
      }   
    }
  return (
    <section id="contact" className="contact">
        <div className="container">
            <motion.h1 whileInView={{ y:[100, 1] }} transition={{ duration:0.5 , ease:easeOut}} className="contact-title">{t("contact")}</motion.h1>
            <ul className="contact-list">
                {contacts.map((contact,index)=>(
                    <motion.li whileInView={{ y:[100, 1] }} transition={{ duration:0.5 , ease:easeOut}} className="contact-item" key={index}>
                        <a href={contact.link} className="contact-link">
                            <img src={contact.img} alt="" className="contact-img" />
                            {contact.text}
                        </a>
                    </motion.li>
                ))}
            </ul>
            {!succesM ? (
                <motion.form onSubmit={(e)=>sendMessage(e)} whileInView={{ y:[100, 1] }} transition={{ duration:0.5 , ease:easeOut}} className="contact-form">
                <input 
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)} 
                    name="inputName" 
                    type="text" 
                    required 
                    placeholder={t("yourName")}
                />
                <input 
                    value={emailValue}
                    onChange={(e)=>setEmailValue(e.target.value)}
                    name="inputEmail" 
                    type="email" 
                    required 
                    placeholder={t("yourEmail")}
                />
                <textarea 
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    name="inputMassage" 
                    required
                    placeholder={t("yourMessage")}
                />
                <button type="submit" className="contact-btn">{t("sendMessage")}</button>
            </motion.form>
            ) : (
                <div className="contact-succes">
                    <h1>{t("succesful")}</h1>
                </div>
            )}
            <h1 className="contact-copyright">@2024 Sattorov Shohruh</h1>
            <div className="sublinks">
                <a target="_blank" href="https://t.me//sattorov_shoxrux"><img src={telegram} alt="" className="sublink" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/shohruh-sattorov-4a821b2b3"><img src={linkedin} alt="" className="sublink" /></a>
            </div>
            
        </div>
    </section>
  )
}

export default Contact;
