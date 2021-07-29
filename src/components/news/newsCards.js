import React from 'react';
import './newsCards.css';

const NewsCard = ({ src, title, time, text, activity }) => {
    return (
        <div className="news">
            <div className="root-news">
                <div className="text-h2">
                    <img src={src} className="img" alt="news-image"/>
                    <h2 className="text-h2">{title}</h2>
                    <h5><img src={activity} />   {time}</h5>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
