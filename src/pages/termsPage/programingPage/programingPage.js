import { useTranslation } from "react-i18next";
import React, {Suspense} from 'react'
import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import MediaNews from "../../../components/terms/media/mediaNews";
import { laboratoryProgramming } from "../../../constants/laboratory";


const ProgrammingPage = () => {
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
                laboratoryprogram={laboratoryProgramming}
                name={t("programming")} 
                teachers={['JOHN', 'SMITH']}
                description={['description', 'WEB DEVELOPER']}
             />
            <Footer />
            
        </div>
        </Suspense>
    );
};
export default ProgrammingPage;