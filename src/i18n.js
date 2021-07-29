import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationsEn = {
    About: "About",
    News: "News",
    Events: "Events",
    Courses: "Courses",
    Contact: "Contact",
    learn: "Learn and develop",
    enginner: "ENGINNER LABORATORY",
    chess: "CHESS LABORATORY",
    programming: "PROGRAMMING LABORATORY",
    media: "MEDIA LABORATORY",
    allnews: "All news & events",
    inovationCenter: "Innovation Ethnic Regional Center",
    contactUs: "Contact Us",
    Smessage: "SEND A MESSAGE",
    mail: "E-mail",
    EnterEmail: "Enter your email",
    EnterName: "Enter your name",
    relatedNews: "RELATED NEWS"
};

const translationsAm = {
  About: "Մեր մասին",
  News: "Նորություններ",
  Events: "Իրադարձություններ",
  Courses: "Դասընթացներ",
  Contact: "Կապ",
  partners: "մեր գործընկերները",
  learn: "Սովորել և զարգանալ",
  enginner: "Ինժեներական լաբորատորիա",
  chess: "Շախմատի լաբորատորիա",
  programming: "Ծրագրավորման լաբորատորիա",
  media: "Մեդիա լաբորատորիա",
  allnews: "Բոլոր նորությունները և իրադարձությունները",
  inovationCenter: "Նորարարությունների էթնիկ տարածաշրջանային կենտրոն",
  contactUs: "Կապվեք մեզ հետ",
  Smessage: "Ուղարկել Հաղորդագրություն",
  Name: "Անունը",
  mail: "Էլ. հասցե",
  EnterEmail: "Մուտքագրեք ձեր Էլ. փոստի հասցեն",
  Message: "Հաղորդագրություն",
  Send: "Ուղարկել",
  EnterName: "Մուտքագրեք ձեր անունը",
  relatedNews: "Կապակցված նորություններ",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      hy: { translation: translationsAm },
    },
    lng: "en",
    interpolation: { escapeValue: false },
  });