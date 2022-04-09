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

    return (<div className={'mainDiv'}>
        {rocketsData !== undefined ?
        <div className={'container'}>
            {rocketsData.map((rocket: { id: React.Key | null | undefined; active: boolean; engines: { number: number; version: string; }; description: string; name: string; wikipedia: string; flickr_images: string[]; }) => (
                <RocketDisplay key={rocket.id} active={rocket.active} numberEngines={rocket.engines.number} enginesVersion={rocket.engines.version} description={rocket.description} name={rocket.name} wikipedia={rocket.wikipedia} flickr_images={rocket.flickr_images[0]} />
            ))}
        </div>
        : null}
    </div>)
}