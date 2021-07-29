import React, {Suspense} from 'react'
import { useTranslation } from "react-i18next";
import Navbar from "../../../components/navbar"
import MediaNews from '../../../components/terms/media/mediaNews'
import { laboratoryMedia } from "../../../constants/laboratory";
import Footer from "../../../components/footer"


const MediaPage = () => {
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
                    name={t("media")} 
                    laboratorymedia={laboratoryMedia}
                    teachers={['Lia', 'Martinez']}
                    description={['Full Stack Developer', 'WEB DEVELOPER']}
                />
                <Footer />    
            </div>
        </Suspense>
    );
};
export default MediaPage;