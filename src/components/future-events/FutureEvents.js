import React from "react";
import indiaFlag from "../../assets/images/india-flag.svg";
import "./FutureEvents.css";


const FutureEvents = ({eventsData}) => {
    return (
        <div className="events-container">
            <h3>مسابقات آینده</h3>
            {
                eventsData &&
                <div className="events-wrapper">
                    {
                        eventsData.map(eventData => (
                            <div key={eventData.id} className="event">
                                <span className="date">{eventData.event_date}</span>
                                <div className="info">
                                    <img src={indiaFlag} alt="" />
                                    <span>{eventData.name}</span>
                                </div>
                            </div>
                        ))
                    }
            </div>
            }
        </div>
    );
};


export default FutureEvents;