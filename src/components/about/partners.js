import React from 'react'
import partenrs from '../../assets/logo/partners.png'
import PartnersCard from '../../components/about/partnersCards'
import './index.css'


const partners = [
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

const Partner = () => {
    return(
        <div className="about-root">
            {partners.map((item) => {
                    return (
                        <PartnersCard
                            partenrs={item.partenrs}
                        />
                    );
            })}
        </div>
    )
}

export default Partner