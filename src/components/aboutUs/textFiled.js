import React from 'react';
import './aboutUs.css';

const TextField = ({fullText}) => {
    return (
        <div className="about-p">
            <p>
                {fullText}
            </p>
        </div>
    );
};

export default TextField;//ABOUT US