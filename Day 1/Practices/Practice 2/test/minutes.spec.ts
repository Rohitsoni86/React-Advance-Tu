import { MinutesC } from "../controller/minutesConverter.Controller";

const minutes = new MinutesC();

beforeAll(() => {
    console.log("Running Before All Specs !!")
})



describe("minutes", () => {

    it("invalid minutes & only positive integer allowed", () => {
        const data = -2
        expect(minutes.convertMinutes(data)).toEqual("Minutes must be a positive Integer")
    })

    it("minutes is positive integer", () => {
        const data = 2
        expect(minutes.convertMinutes(data)).toEqual("Minutes Converted To Second Success !!")
    })

})