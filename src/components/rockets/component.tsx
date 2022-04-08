import React, { FC, useEffect, useState } from "react";
import { getRockets } from "../services/rockets/service";
import { RocketDisplay } from "./rocket/components"

export const Rockets:FC = () => {
    const [rocketsData, setRocketsData] = useState<any>(undefined);
    
    useEffect(() => {
        fetcheRockets();
    },[])

    useEffect(() => {
    }, [rocketsData])
    
    const fetcheRockets = async () => {
        const response = await getRockets();
        setRocketsData(response);
    };

    return (<div>
        Rockets!
        {rocketsData !== undefined ?
        <div>
            {rocketsData.map((rocket: { id: React.Key | null | undefined; engines: { number: number; version: string; }; wikipedia: string; flickr_images: string[]; }) => (
                <RocketDisplay key={rocket.id} numberEngines={rocket.engines.number} enginesVersion={rocket.engines.version} wikipedia={rocket.wikipedia} flickr_images={rocket.flickr_images[0]} />
            ))}
        </div>
        : null}
    </div>)
}