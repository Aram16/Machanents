import React, {Suspense} from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './index.css'

const CoursPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return(
        <Suspense fallback="Loading...">
            <div className="courses">
                <Navbar id="nav-bar" />
                <h1>{t("Courses")}</h1>
                <p>{t("learn")}</p>
                <div className="cours">
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
                </div>
                <Footer/>
            </div>
        </Suspense>
    )
}

export default CoursPage