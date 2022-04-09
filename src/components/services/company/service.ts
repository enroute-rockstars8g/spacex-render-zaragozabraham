export const getCompanyData = async () => {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/company');
        if (response.status !== 200) return;
        const companyData = await response.json();
        return companyData;
    } catch (e) {
        console.error(e)
    }
}