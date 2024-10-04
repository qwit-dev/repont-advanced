import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const ResizeHandler = () => {
    const map = useMap();
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
            map.invalidateSize();
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [map]);

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
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ height: '100vh' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]} />
            <ResizeHandler />
        </MapContainer>
    );
}

export default MainIndexPage;