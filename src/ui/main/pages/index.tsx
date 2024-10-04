import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const MapHandler = () => {
    const map = useMap();

    useEffect(() => {
        const handleMoveEnd = () => {
            const bounds = map.getBounds();
            const topRight = bounds.getNorthEast();
            const bottomLeft = bounds.getSouthWest();
            // boundok visszaadnak egy latlng objectet amiben van a latitude es a longitude
            console.log('Bounds:', topRight, bottomLeft);
        }
        map.on('moveend', handleMoveEnd);
        
        return () => map.off('moveend', handleMoveEnd);
    }, [map]);
    
    return null;
}

const MainIndexPage = () => {
    const [height, setHeight] = useState(window.innerHeight);

    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={
            { position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', zIndex: '0' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} />
            <MapHandler/>
        </MapContainer>
    );
}

export default MainIndexPage;