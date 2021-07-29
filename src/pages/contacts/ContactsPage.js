import React from 'react';
import Footer from '../../components/footer/index';
import UserForm from '../../components/contacts/userForm';
import Address from '../../components/contacts/address';
import MessageForm from '../../components/contacts/messageForm';
import { useTranslation } from "react-i18next";
import './index.css'
import Navbar from '../../components/navbar';

const ContactsPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return (
        <div className="contacts">
            <Navbar id="nav-bar" />
            <h1>{t("contactUs")}</h1>
            <MessageForm />
            <div className="contact-address">
                <Address />
            </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;
