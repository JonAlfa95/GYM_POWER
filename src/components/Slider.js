import React from 'react';

import slider_1 from '../images/slider_1.jpeg';
import slider_2 from '../images/slider_2.jpeg';
import slider_3 from '../images/slider_3.jpeg';


export default function Slider() {
    return (
        <div>
            <div className="section">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img className="responsive-img" src={slider_1} alt="imagen ilustrativa de un gimnacio"/>
                        <div className="caption left-align">
                        <h1 className="header aling-top white-text sha">GYM POWER</h1>
                        <div className="row center-align">
                            <h4 className="header hide-on-med-and-down light white-text left-align sha"> No Pain, No Gain</h4>
                        </div>
                        </div>
                    </li>
                    <li>
                        <img className="responsive-img" src={slider_2} alt="imagen ilustrativa de un gimnacio" />
                        <div className="caption center-align">
                            <h1 className="header aling-top white-text text-darken-2 sha">GYM POWER</h1>
                            <div className="row center-align">
                                <h4 className="header hide-on-med-and-down light white-text center-align sha"> No Pain, No Gain</h4>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img className="responsive-img" src={slider_3} alt="imagen ilustrativa de un gimnacio" />
                        <div className="caption right-align">
                            <h1 className="header aling-top white-text text-darken-2 sha">GYM POWER</h1>
                            <div className="row center-align">
                                <h4 className="header hide-on-med-and-down light white-text right-align sha"> No Pain, No Gain</h4>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

