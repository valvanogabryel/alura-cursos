export default function convertTimeToSeconds(time: string) {
    const [hours, minutes, seconds] = time.split(':').map(item => {
        return Number(item);
    })

    const hoursInSeconds = hours * 3600;
    const minutesInSeconds = minutes * 60;

    return hoursInSeconds + minutesInSeconds + seconds;
}