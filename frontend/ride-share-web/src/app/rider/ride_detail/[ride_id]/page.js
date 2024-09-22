'use client';
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import '../../../styles/login.css'

const RideDetailPage = function() {
    const params = useParams();
    const [rideID, setRideId] = useState(params.ride_id);
    return (
        <div>
            <h1>Showing details for Ride: {rideID}</h1>
        </div>
    )
}

export default RideDetailPage;