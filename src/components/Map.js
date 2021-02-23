import React, { Component } from 'react';

import L from 'leaflet';


export default class Map extends Component {
    
    componentDidMount(){
        this.map = L.map('map', {
            center: [13.4808197, -86.582077], 
            zoom: 14
        });

        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 20,
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy;'
        }).addTo(this.map);

        const gIcon = L.icon({
            iconUrl: require('../images/gympin.svg'),
            iconSize: [40, 58],
            iconAnchor: [18, 6],
            popupAnchor: [-0.5, -10]
        });

        const uIcon = L.icon({
            iconUrl: require('../images/userpin.svg'),
            iconSize: [22, 30],
            iconAnchor: [16, 4],
            popupAnchor: [-4, -5]
        });

        this.map.locate({enableHighAccuracy: true});
        this.map.on('locationfound', e => {
            const coords = [e.latlng.lat, e.latlng.lng];
            console.log(coords)
            L.marker(coords, {icon: uIcon}).bindPopup('Te encuentras aqui').addTo(this.map);
        });

        L.marker([13.4808197, -86.582077], {icon: gIcon}).bindPopup('Este es el centro de SOMOTO').addTo(this.map);
       
    }

    render(){
        return (
            <div id="map"></div>
        )
    }

}
