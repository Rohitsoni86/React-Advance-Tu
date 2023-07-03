import uncensorString from "../models/functionStringsModel"

let result: string = "";
let count: number = 0;
let lastCensored: number = 0;

export default class stringCheck {
    letCollectedStringsbe: uncensorString


    checkUncensorString = (stringwithoutVo: uncensorString["stringWithoutVowel"], stringwithVo: uncensorString["stringWithVowel"]): string => {

        //check if number is there or not
        if (!stringwithoutVo) {
            return "Please Enter First String that is replaced By * at vowels"
        }
        if (stringwithVo == null || stringwithVo == undefined) {
            return "Please Enter Second String that is contains vowels"
        }

        //Check the Length
        if (stringwithoutVo.length < 2) {
            return "String must be of at least 2 character Long To Check !!!"
        }

        //Check both Length
        if (stringwithoutVo.length < stringwithVo.length) {
            return "Please Enter Correct Strings To Validate !!!"
        }


        for (let i = 0; i < stringwithoutVo.length; i++) {
            if (stringwithoutVo[i] == "*") {
                result +=
                    stringwithoutVo.slice(lastCensored, i) +
                    stringwithVo[count++];
                lastCensored = i + 1;
            }
        }
        return result + stringwithoutVo.slice(lastCensored, stringwithoutVo.length);

    }
} 