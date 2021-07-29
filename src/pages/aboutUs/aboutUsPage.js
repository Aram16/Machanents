import React, { Suspense } from 'react';
import TextField from '../../components/aboutUs/textFiled';
import Partners from '../../components/aboutUs/partners';
import { fullText, shotText } from '../../constants/about';
import { useTranslation } from "react-i18next";
import Footer from '../../components/footer/index'
import './aboutUsPage.css';
import Navbar from '../../components/navbar';

const AboutUsPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return (
        <Suspense fallback="Loading...">

            <div className="aboutUs">
                <Navbar id="nav-bar" />
                <h1 className="about-h1">{t("About")}</h1>
                <TextField
                    fullText={fullText} 
                    className="about-p"    
                />
                <p className="partners">{t("partners")}</p> 
                <div>
                    <Partners />
                </div>
            </div>
            <Footer />
        </Suspense>
    );
};
export default AboutUsPage;