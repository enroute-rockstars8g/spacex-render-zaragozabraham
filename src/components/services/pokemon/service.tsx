export const getRockets = async () => {
    try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        if (response.status !== 200) return;
        const rockets = await response.json();
        // console.log(typeof(rockets))
        return rockets;
    } catch (e) {
        console.log('------------ ERROR ------------')
        console.error(e)
    }
}