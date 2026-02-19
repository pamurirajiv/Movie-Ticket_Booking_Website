import { createContext, useContext, useState, useEffect } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocationData = async (latitude, longitude) => {
            try {
                console.log('Fetching location for:', latitude, longitude);
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
                    {
                        headers: {
                            'User-Agent': 'BookTickets-App',
                        }
                    }
                );
                
                if (!res.ok) {
                    throw new Error(`API returned status ${res.status}`);
                }
                
                const data = await res.json();
                console.log('Full location data:', data);
                console.log('Address object:', data?.address);
                
                const state = data?.address?.state;
                const city = data?.address?.city || data?.address?.town || data?.address?.village;
                console.log('State:', state);
                console.log('City:', city);
                
                const userLocation = city && state ? `${city}, ${state}` : state || city || null;
                
                if (userLocation) {
                    setLocation(userLocation);
                } else {
                    setError('Location data not found');
                }
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch location data:', error);
                setError(`Failed to fetch location data: ${error.message}`);
                setLoading(false);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log('Got geolocation:', latitude, longitude);
                    fetchLocationData(latitude, longitude);
                },
                (err) => {
                    console.error('Geolocation error:', err);
                    setError(`Location access denied: ${err.message}`);
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation not supported by browser');
            setLoading(false);
        }
    }, []);

    return (
        <LocationContext.Provider value={{ location, loading, error }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);