import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const MOBILE_API_BASE = 'https://drs.mohu.hu';
const WEB_API_BASE = 'https://map.mohu.hu/api/Map';

const drsPointDetailsUrl = (id: string) => `${WEB_API_BASE}/GetDrsPointDetails?wastePointId=${id}`;
const pointsByPositionUrl = (blLat: string, blLong: string, trLat: string, trLong: string) => `${MOBILE_API_BASE}/collections/pocs/geoposition?bottomLeftGeopoint=${blLat}%7C${blLong}&topRightGeopoint=${trLat}%7C${trLong}`;

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
        const handleMoveEnd = async ()  => {
            const bounds = map.getBounds();
            const topRight = bounds.getNorthEast();
            const bottomLeft = bounds.getSouthWest();
            // boundok visszaadnak egy latlng objectet amiben van a latitude es a longitude
            console.log('Bounds:', topRight, bottomLeft);
            console.log('Points request URL:', pointsByPositionUrl(bottomLeft.lat.toString(), bottomLeft.lng.toString(), topRight.lat.toString(), topRight.lng.toString()));
            // test request
            const res = await fetch(
                pointsByPositionUrl(
                    bottomLeft.lat.toString(),
                    bottomLeft.lng.toString(),
                    topRight.lat.toString(),
                    topRight.lng.toString(),
                )
            );
            const data = await res.json();
            console.log('Points:', data); // <- ez itt mukodik, a data-ban benne vannak a pontok amiket visszaad az api
            // mar csak ki kell irni marker-eket minden pont coordinate-jere :3
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
            {/* <TileLayer
                attribution='Ez az oldal egy nem hivatalos alternatív REpont térkép. Az oldal semmilyen kapcsolatban nem áll a REponttal, a repont.hu weboldallal, vagy a REpont üzemeltetőivel.'
            /> */}
            <Marker position={[51.505, -0.09]} />
            <ResizeHandler />
        </MapContainer>
    );
}

export default MainIndexPage;