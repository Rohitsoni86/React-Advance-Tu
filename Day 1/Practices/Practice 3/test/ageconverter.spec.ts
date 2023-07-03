import { AgeC } from "../controller/ageConverter.Controller";

const userAge = new AgeC();

beforeAll(() => {
    console.log("Running Before All Specs !!")
})



describe("AGE Varification", () => {

    it("invalid Age & only positive integer allowed", () => {
        const data = -2
        expect(userAge.convertAge(data)).toEqual("Age must be a positive Integer")
    })

    it("Age is positive integer", () => {
        const data = 2
        expect(userAge.convertAge(data)).toEqual("Age Converted To Days Success !!")
    })

})