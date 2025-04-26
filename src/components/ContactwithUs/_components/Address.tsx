import React from 'react';

export default function ContactUsAddress() {
    return (
        <div className="addressRow">
            <div className="addressChil">
                <h3>ADDRESS</h3>
                <p>19 First St East, Elmira, ON N3B 2E6</p>
            </div>
            <div className="addressChil">
                <h3>PHONE</h3>
                <p>(519) 669-3362</p>
            </div>
            <div className="addressChil">
                <h3>EMAIL</h3>
                <p>admin@cjbrubacher.com</p>
            </div>
            <div className="addressChil">
                <h3>OPERATION HOURS</h3>
                <div className="hours">
                    <p>Monday - Thursday: 7:30 AM–5:30 PM</p>
                    <p>Friday: 8 AM–3 PM</p>
                    <p>Saturday & Sunday: Closed</p>
                </div>
            </div>
        </div>
    );
}