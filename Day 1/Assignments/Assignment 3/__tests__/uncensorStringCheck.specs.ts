import stringCheck from "../controller/uncensorStringCheck.Controller";

const newStringContainObject = new stringCheck();

beforeAll(() => {
    console.log("Running Before All Specs !!")
})



describe("checkStrings_1_test Case", () => {
    it("string without vowel is less than 2 characters long", () => {
        const str1: string = "R";
        const str2: string = "eee"
        expect(newStringContainObject.checkUncensorString(str1, str2)).toEqual("String must be of at least 2 character Long To Check !!!")
    })

    it("string without vowel is less than String with Vowel", () => {
        const str1: string = "Roh";
        const str2: string = "eaeaeaea"
        expect(newStringContainObject.checkUncensorString(str1, str2)).toEqual("Please Enter Correct Strings To Validate !!!")
    })


    it("Both String Provided Are Correct", () => {
        const str1: string = "Wh*r* d*d my v*w*ls g*?";
        const str2: string = "eeioeo"
        expect(newStringContainObject.checkUncensorString(str1, str2)).toEqual("Where did my vowels go?")
    })


})




afterAll(() => {
    console.log("All test Cases Checked !!!")
})