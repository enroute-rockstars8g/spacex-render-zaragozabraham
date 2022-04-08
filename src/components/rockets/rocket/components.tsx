import React, { FC } from "react";
import { RocketDisplayProps } from "./types";

export const RocketDisplay:FC<RocketDisplayProps> = ({
    numberEngines,
    enginesVersion,
    wikipedia,
    flickr_images
}) => {
    return(
        <div>
            <img src={flickr_images} />
            No. of engines: {numberEngines}<br/>
            Engine version: {enginesVersion}<br/>
            Wiki: {wikipedia}<br/><br/>
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