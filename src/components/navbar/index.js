import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/ket.png";
import { useTranslation } from "react-i18next";
import armenia from "../../assets/logo/armenia.png";
import america from "../../assets/logo/america.png";
import "./index.css";

const Navbar = ({ id }) => {
  const { t, i18n } = useTranslation();
  const onClick = (name) => {
    console.log(name);
    i18n.changeLanguage(name);
  };

  return (
    <Suspense fallback="Loading...">
      <nav>
        <div className="navv">
          <input type="checkbox" id={id} className="checkbox"/>
          <div className="nav-header">
            <div className="nav-title">
              <Link to="/">
                <a>
                  <img src={logo} />
                </a>
              </Link> 
            </div>
          </div>
          <div className="ereq-ket">
            <label for={id}>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="navigation">

            <Link to="/aboutUs" className="Link">
              {t("About")}
            </Link>

            <Link to="/allNews" className="Link">
              {t("News")}
            </Link>

            <Link to="/events" className="Link">
              {t("Events")}
            </Link>

            <Link to="/courses" className="Link">
              {t("Courses")}
            </Link>

            <Link to="/contact" className="Link">
              {t("Contact")}
            </Link>

            <div onClick={() => onClick("hy")} className="navigation-div">
              <img className="droosh" src={armenia} alt="armenia" />
            </div>

            <div onClick={() => onClick("en")} className="navigation-div">
              <img className="droosh" src={america} alt="english" />
            </div>
            
          </div>
        </div>
      </nav>
    </Suspense>
  );
};

export default Navbar;