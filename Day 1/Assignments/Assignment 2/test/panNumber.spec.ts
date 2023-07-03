import panDNum from "../controller/numberCheck.Controller"

const pnumber = new panDNum();

beforeAll(() => {
    console.log("Running Before All Specs !!")
})



describe("Pnumber", () => {

    it("invalid number & only positive integer allowed", () => {
        const data = -1234567888
        expect(pnumber.checkpanDNumber({ panNumber: data })).toEqual("Pan Digit Number Should be A Positive Number & 10 Digit Long !!")
    })

    it("PNumber is positive integer but less then 10 digits", () => {
        const data = 24234234
        expect(pnumber.checkpanDNumber({ panNumber: data })).toEqual("Pan Digit Number Should be At least 10 Digit Long !!")
    })

    it("PNumber is positive integer and contains 10 digits but not A Pan Number", () => {
        const data = 12345678911
        expect(pnumber.checkpanDNumber({ panNumber: data })).toEqual("False PNumber entered is A Valid PanNumber !!")
    })


    it("PNumber is positive integer and contains 10 digits & A Pan Number", () => {
        const data = 1234567890
        expect(pnumber.checkpanDNumber({ panNumber: data })).toEqual("True PNumber entered is A Valid PanNumber !!")
    })

})