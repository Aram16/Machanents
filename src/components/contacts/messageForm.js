import emailjs from 'emailjs-com';
import React, {Suspense} from 'react';
import { useTranslation } from "react-i18next";
import'./index.css'

const MessageForm = () => {
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_ph1uvke', e.target, 'user_Gf7LnIX8yVebQUFeJyel8')
        .then((resp) => {
            console.log(resp, 'Thank You');
        }, (err) => {
            console.log(err ,'error');
        });

        e.target.reset()
    }

    const showInput = (e) =>{
        console.log(e.target.value);
    }

    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return(
        <Suspense fallback="Loading...">
            <div>
            <div className="form">
                <div className="contaiiner">
                            <div className="title">{t("Smessage")}</div>
                    <div className="content" >
                        <form onSubmit={sendEmail}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details"> {t("Name")}</span>
                                    <input
                                        type="text"
                                        name="name"
                                        onInput={showInput} 
                                        placeholder={t("EnterName")} required 
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details">{t("mail")}</span>
                                    <input 
                                        type="text" 
                                        name="email"
                                        onInput={showInput} 
                                        placeholder={t("EnterEmail")} required 
                                    />
                                </div>
                                <div className="input-box">
                                    <span className="details"> {t("Message")}</span>
                                    <textarea 
                                        type="text"
                                        name="message"
                                        onInput={showInput}
                                        placeholder={t("Message")} required 
                                    />
                                </div>
                            </div>
                            <div className="gender-details">
                                </div>
                                    <div className="button">
                                    <input type="submit" value={t("Send")} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </Suspense>
    )
}

export default MessageForm