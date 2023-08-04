import React, { useState, useEffect } from 'react';
import Events from './Events/Events';
import MoreEvents from './MoreEvents/MoreEvents';
import axios from 'axios';

export default function EventsContainer({ Heading }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/events/');
                const eventsData = response.data;
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        })();
    }, []);

    return (
        <>
            <Events Heading={Heading} events={events.slice(0, 8)} />
            <MoreEvents Heading={"More Events"} events={events.slice(8, 16)} />
        </>
    );
}
