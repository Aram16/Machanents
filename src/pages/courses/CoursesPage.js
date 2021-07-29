import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/ket.png'
import armenia from "../../assets/logo/armenia.png";
import america from "../../assets/logo/america.png";
import { useTranslation } from "react-i18next";
import './index.css'


const CoursesPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return(
        <div id="courses">
            <nav>
                <div className="navv">
                    <input type="checkbox" id="nav-courses" />
                    <div className="nav-header">
                        <div className="nav-title">
                            <a href="#div">
                                <img src={logo}/>
                            </a>
                        </div>
                    </div>
                    <div className="ereq-ket">
                        <label for="nav-courses">
                        <span></span>
                        <span></span>
                        <span></span>
                        </label>
                    </div>

                    <div className="navigation">
                            <a href="#about">{t("About")}</a>
                            <a href="#news">{t("News")}</a>
                            <Link to="/events" className="Link">{t("Events")}</Link>
                            <a href="#courses">{t("Courses")}</a>
                            <Link to="/contact" className="Link" >{t("Contact")}</Link>
                            <div onClick={() => onClick("hy")} className="navigation-div">
                                <img className="droosh" src={armenia} alt="armenia" />
                            </div>
                            <div onClick={() => onClick("en")} className="navigation-div">
                                <img className="droosh" src={america} alt="english" />
                            </div>
                    </div>
                </div>
            </nav>

            <h1>{t("Courses")} </h1>
            <p>{t("learn")}</p>
            <div className="cours-div">
                <div>
                    <Link to="/enginnerLaboratory" className="Link">
                        <h3>
                        {t("enginner")} 
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/chessLaboratory" className="Link">
                        <h3>
                        {t("chess")} 
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="cours-div">
                <div>
                    <Link to="/programmingLaboratory" className="Link">
                        <h3>
                        {t("programming")} 
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/mediaLaboratory" className="Link">
                        <h3>
                        {t("media")} 
                        </h3>
                    </Link>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default CoursesPage