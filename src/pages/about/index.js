import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import armenia from "../../assets/logo/armenia.png";
import america from "../../assets/logo/america.png";
import Partner from "../../components/about/partners";
import TextField from "../../components/about/textField";
import { shotText } from "../../constants/about";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo/ket.png";
import "./index.css";


const AboutPage = () => {

  const { t, i18n } = useTranslation();
  const onClick = (name) => {
    console.log(name);
    i18n.changeLanguage(name);
  };

  return(
    <Suspense fallback="Loading..." id="about">

      <div id="about">
          <nav>
          <div className="navv">
              <input type="checkbox" id="nav-about" />
              <div className="nav-header">
                  <div className="nav-title">
                      <a href="#div">
                          <img src={logo}/>
                      </a>
                  </div>
              </div>
              <div className="ereq-ket">
                  <label for="nav-about">
                  <span></span>
                  <span></span>
                  <span></span>
                  </label>
              </div>

              <div className="navigation">
                      <a href="#about">{t("About")}</a>
                      <a href="#news">{t("News")}</a>
                      <Link to="/events" className="Link"><a href="">{t("Events")}</a></Link>
                      <a href="#courses">{t("Courses")}</a>
                      <Link to="/contact" className="Link"><a href="">{t("Contact")}</a></Link>
                      <div onClick={() => onClick("hy")} className="navigation-div">
                        <img className="droosh" src={armenia} alt="armenia" />
                      </div>
                      <div onClick={() => onClick("en")} className="navigation-div">
                        <img className="droosh" src={america} alt="english" />
                      </div>
              </div>
          </div>
      </nav>
      <h1 className="about-h1">{t("About")}</h1>
      <TextField text={shotText} className="about-p" />
      <p className="partners">{t("partners")}</p>
      <div>
        <Partner />
      </div>
      </div>
      </Suspense>
  )
}

export default AboutPage
