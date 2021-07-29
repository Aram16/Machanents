import React, {Suspense} from 'react'
import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import { useTranslation } from "react-i18next";
import MediaNews from "../../../components/terms/media/mediaNews";
import { laboratoryEnginner } from "../../../constants/laboratory";

const EnginnerPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return (
        <Suspense fallback="Loading...">
            <div>
                <Navbar id="nav-bar"/>
                <MediaNews
                    name={t("enginner")} 
                    laboratoryenginner={laboratoryEnginner}
                    teachers={['Lia', 'Martinez']}
                    description={['Full Stack Developer', 'WEB DEVELOPER']}
                />
                <Footer />
            </div>
        </Suspense>
    );
};
export default EnginnerPage;