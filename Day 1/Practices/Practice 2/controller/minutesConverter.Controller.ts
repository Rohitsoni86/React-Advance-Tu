import Minutes from "../models/minutesModel";


export class MinutesC {
    letMinbe: Minutes

    convertMinutes = (minutes: number): number => {
        const convertedSeconds = minutes * 60;

        return convertedSeconds;
    }
}