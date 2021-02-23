import React from 'react'

import Map from './Map'

export default function Interactive() {
    return (
        <div className="container">
            <div className="section">
            <div className="row">
                    <div className="col s12 m6 l8">
                        <Map />
                    </div>
                <div className="col s12 m6 l4">
                   <div className="redes-contenedor">
                       <ul>
                           <li><a href="https://www.facebook.com" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                           <li><a href="https://www.instagram.com" className="instagram"><i className="fab fa-instagram"></i></a></li>
                           <li><a href="https://www.youtube.com" className="youtube"><i className="fab fa-youtube"></i></a></li>
                       </ul>
                   </div> 
                </div>
            </div>
            </div>
        </div>
    )
}
