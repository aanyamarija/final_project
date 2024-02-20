import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import insta from "./insta.png";
import watsapp from "./watsapp.png";

export default function Footer() {
  const icons = [
    {
      id: 1,
      icon: <img src={insta} alt="Instagram"  />,
      link: "https://www.instagram.com/",
    },
    {
      id: 2,
      icon: <img src={watsapp} alt="WhatsApp"  />,
      link: "https://wa.me/1234567890",
    },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.contactTitle}>
        <p>Contact</p>
      </div>
      <div className={style.cardsContainer}>


        <div className={style.phone}>
          <div className={style.phoneWrapper}>
            <h2>Phone</h2>
            <Link className={style.phone} to="tel:+49 999 999 99 99">
              <span>+49 999 999 99 99</span>
            </Link>
          </div>

        </div>
        <div className={style.socialIcons}>
          <h2>Socials</h2>
          <div className={style.iconsIwa}>
            {icons.map((el) => (
              <div className={style.icon} key={el.id}>
                <a href={el.link} target="_blank" rel="noopener noreferrer">
                  {el.icon}
                </a>
              </div>
            ))}
          </div>
        </div>



        <div className={style.address}>
          <h2>Address</h2>
          <p>
            <a href="https://www.google.com/maps?q=Linkstraße+2,+10785+Berlin,+Deutschland" target="_blank" rel="noopener noreferrer">
              <span>Linkstraße 2, 8 OG, 10785,</span>
              <span>Berlin, Deutschland</span>
            </a>
          </p>
        </div>



        <div className={style.workingHours}>
          <h2>Working Hours</h2>
          <p>24 hours a day</p>
        </div>



      </div>
      <div className={style.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4102804173835!2d13.372521312304544!3d52.507913737007804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1697622009373!5m2!1sde!2sde"
          className={style.map}
          title="Garden Shop Address"
        ></iframe>
      </div>
    </footer>
  );
}