import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/ket.png';
import armenia from "../../../assets/logo/armenia.png";
import america from "../../../assets/logo/america.png";
import { useTranslation } from "react-i18next";

import './index.css';

const NewsNavbar = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return (
        <Suspense fallback="Loading...">
            <nav>
                <div className="navv">
                    <input type="checkbox" id="nav-news" />
                    <div className="nav-header">
                        <div className="nav-title">
                            <a href="#div">
                                <img src={logo}/>
                            </a>
                        </div>
                    </div>
                    <div className="ereq-ket">
                        <label for="nav-news">
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
        </Suspense>
    );
};

export default NewsNavbar;