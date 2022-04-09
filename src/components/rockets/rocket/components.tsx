import React, { FC } from "react";
import { RocketDisplayProps } from "./types";

export const RocketDisplay:FC<RocketDisplayProps> = ({
    active,
    numberEngines,
    enginesVersion,
    description,
    name,
    wikipedia,
    flickr_images
}) => {
    return(
        <div className={'card'}>
            <div className={'card-header'}>
                <img src={flickr_images} className={'rocket-img'}/>
            </div>
            <div className={'card-body'}>
                <span className={active ? 'tag tag-active' : 'tag tag-inactive'}>{active ? 'ACTIVE' : 'INACTIVE'}</span>
                <h4>{name}</h4>
                <p>{description}</p>
                <div className={'motor'}>
                    <div className={'motor-info'}>
                        <h5>ENGINE INFO</h5>
                        <small>Number of engines: {numberEngines} &nbsp;| &nbsp; Version: {enginesVersion}</small>
                    </div>
                </div>
            </div> 
        </div>
    )
}

// export const RocketsDisplay:FC<RocketsDisplayProps> = ({
//     active,
//     company,
//     cost_per_launch,
//     country,
//     description,
//     engines:numberEngines,
//     engines:version,
//     first_flight,
//     id,
//     mass_kg,
//     name,
//     stages,
//     success_rate_pct,
//     wikipedia
// }) => {
//     return(
//         <div>
//             {active}
//             {numberEngines}
//             {version}
//             {wikipedia}
//         </div>
//     )
// }