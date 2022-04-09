import { useEffect, useState } from "react";
import { getCompanyData } from "../services/company/service";

export const FooterDisplay = () => {
    const [companyData, setCompanyData] = useState<any>(undefined);

    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
        console.log(companyData);
    },[companyData])

    const fetchData = async () => {
        const response = await getCompanyData();
        setCompanyData(response);
    }
    return (
        <div className={'footer'}>
            <span>SPACEX</span>
            <a href={companyData ? companyData.links.website : ''}>
                <span>OFFICIAL WEB</span>
            </a>
            <a href={companyData ? companyData.links.twitter : ''}>
                <span>TWITTER</span>
            </a>
            <a href={companyData ? companyData.links.flickr : ''}>
                <span>FLICKR</span>
            </a>
            <span>CALIFORNIA</span>
        </div>
    )
}