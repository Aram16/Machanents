import React from 'react'
import partenrs from '../../assets/logo/partners.png'
import PartnersCard from '../../components/about/partnersCards'
import './aboutUs.css'


const aboutUspartners = [
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
];

const aboutUspartners2 = [
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
    {
        partenrs: partenrs,
    },
]

const Partners = () => {
    return(
        <div className="aboutUs-cards">
            <div className="about-root">
            {aboutUspartners.map((item) => {
                    return (
                        <PartnersCard
                            aboutUspartners={item.partenrs}
                        />
                    );
            })}
            </div>
            <div className="about-root">
            {aboutUspartners2.map((item) => {
                    return (
                        <PartnersCard
                            aboutUspartners={item.partenrs}
                        />
                    );
            })}
            </div>
        </div>
    )
}

export default Partners;