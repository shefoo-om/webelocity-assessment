"use client";
import React from 'react'
import "@/styles/OurService.scss";
import dynamic from 'next/dynamic';

const ServiceMap = dynamic(() => import('./_components/ServiceMaps'), {
    ssr: false,
});

export default function OurServiceArea() {
    return (
        <div className="serviceContainer">
            <div className="infoSection">
                <h1>Our Service Area</h1>
                <p>
                    CJ Brubacher Ltd. is your trusted neighbour
                    <br /> for over <span> 100 years of experience.</span>
                </p>
            </div>
            <div className="mapSection">
                <ServiceMap />
            </div>
        </div>
    )
}
