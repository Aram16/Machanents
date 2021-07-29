import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

const TextField = ({text}) => {
    return (
        <div className="about-p">
            <p>
                {text} <Link to="/aboutUs">more</Link>
            </p>
        </div>
    );
};

export default TextField;