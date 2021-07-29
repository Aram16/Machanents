import React, {Suspense} from 'react';
import NewsEvents from '../../components/events/eventscard';
import Navbar from '../../components/navbar';
import { eventsText } from '../../constants/events'
import image from '../../assets/logo/Image.png'
import activity from '../../assets/logo/Activity.png'
import './index.css';
import Footer from '../../components/footer';
import { useTranslation } from "react-i18next";
import EventCard from '../../components/events/cards'

const eventNews = [
    {
        src: image, //image src
        activity: activity,
        title: 'News Title',
        type: 'News',
        time: '11.06.2030',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti. `,
    },
    {
        src: image, //image src
        activity: activity,
        title: 'Event Title',
        type: 'Event',
        time: '12.06.2030',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti. `,
    },
    {
        activity: activity,
        src: image, //image src
        title: 'Event Title',
        type: 'Event',
        time: '13.06.2030',
        text: `Praesent quis viverra ligula, vel convallis 
        massa. Mauris eget mi sed nulla laoreet 
        sollicitudin vitae et lacus. Duis tempus 
        eleifend interdum. Aliquam aliquam 
        luctus commodo. Donec tempor vel nunc 
        at malesuada. Suspendisse potenti.`,
    },
];

const EventsPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return (
        <Suspense fallback="Loading...">
            <div className="div-events">
                <Navbar id="nav-bar" />
                <NewsEvents
                    eventsText={eventsText} 
                />
                <p className="related-news">{t("relatedNews")}</p>
                <div>
                    <EventCard />
                </div>
                <Footer />
            </div>
        </Suspense>
    );
};
export default EventsPage;