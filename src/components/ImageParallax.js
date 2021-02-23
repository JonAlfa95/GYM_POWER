import React from 'react';

import img from '../images/parallax1.jpeg'

export default function ImageParallax() {
    return (
        <div>
            <div className="section">
                <div className="parallax-container">
                    <div className="parallax">
                        <img className="responsive-img" src={img} alt="Esta es una imagen"/>
                    </div>
                </div>
            </div>
        </div>
    )
}