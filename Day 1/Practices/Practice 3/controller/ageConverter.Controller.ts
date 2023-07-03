import UserAge from "../model/ageModel";


export class AgeC {
    letAgeB: UserAge

    convertAge = (age: number): number => {
        const convertedDays = age * 365;

        return convertedDays;
    }
}