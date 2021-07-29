import React, {Suspense} from 'react'
import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import { useTranslation } from "react-i18next";
import MediaNews from "../../../components/terms/media/mediaNews";
import { laboratory } from "../../../constants/laboratory";

const ChessPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return (
        <Suspense fallback="Loading...">
        <div>
            <Navbar id="nav-bar" />
            <MediaNews
                name={t("chess")}
                laboratorychess={laboratory}
                teachers={ ['Chess teacher', 'Chess teacher'] }
                description={ ['Chess teacher' , 'Chess teacher'] } 
            />
            <Footer />
        </div>
        </Suspense>
    );
};
export default ChessPage;