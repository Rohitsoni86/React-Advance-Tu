import panDigitalNum from "../models/pandigitalNumber";


export default class panDNum {
    letNumberbe: panDigitalNum

    checkpanDNumber = (panNumber: panDigitalNum): string => {

        //check if number is there or not
        if (!panNumber.panNumber) {
            return "Please Enter Pan Number To Check"
        }

        //Check the Length
        if (panNumber.panNumber < 0) {
            return "Pan Digit Number Should be A Positive Number & 10 Digit Long !!"
        }
        //Check the Length
        if (panNumber.panNumber.toString().length < 10) {
            return "Pan Digit Number Should be At least 10 Digit Long !!"
        }

        let panNumb = panNumber.panNumber.toString().split("").sort();
        console.log(panNumb)
        console.log(panNumb.length)

        for (let i = 0; i < panNumb.length; i++) {
            if (parseInt(panNumb[i]) != i) {
                return "False PNumber entered is A Valid PanNumber !!";
            }
        }
        return "True PNumber entered is A Valid PanNumber !!"
    }
} 