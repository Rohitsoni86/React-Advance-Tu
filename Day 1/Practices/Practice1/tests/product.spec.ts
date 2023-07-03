import { Product } from "../controller/productController"

const product = new Product();

beforeAll(() => {
    console.log("Running Before All Specs !!")
})



describe("discount", () => {

    it("discount only in [10,20,30]", () => {

        const data = { id: 123, Name: "test", Price: 50, Qty: 1, Total: 50, Discount: 50 };

        expect(product.createProduct(data)).toEqual("\"Discount\" must be one of [10, 20, 30]")

    });


    it("valid discount", () => {

        const data = { id: 123, Name: "test", Price: 50, Qty: 1, Total: 50, Discount: 10 };

        expect(product.createProduct(data)).toEqual("inserted successfully");

    });

})

describe("price", () => {

    it("price is greate than 0", () => {

        for (let i = -2; i < 2; i++) {

            const data = { id: 123, Name: "test", Price: i, Qty: 1, Total: 50, Discount: 10 };

            if (i < 1)

                expect(product.createProduct(data)).toEqual("\"Price\" must be greater than or equal to 1")

            else

                expect(product.createProduct(data)).toEqual("inserted successfully")

        }

    })

})

describe("name", () => {

    it("name length is greate than 3", () => {

        const data = { id: 123, Name: "te", Price: 5, Qty: 1, Total: 50, Discount: 10 };

        expect(product.createProduct(data)).toEqual("\"Name\" length must be at least 3 characters long")

    })

    it("name is only white space", () => {

        const data = { id: 123, Name: "    ", Price: 5, Qty: 1, Total: 50, Discount: 10 };

        expect(product.createProduct(data)).toEqual("\"Name\" is not allowed to be empty")

    })

})



describe("Qty", () => {

    it("Qty is greate than 0", () => {

        for (let i = -2; i < 2; i++) {

            const data = { id: 123, Name: "test", Price: 50, Qty: i, Total: 50, Discount: 10 };

            if (i < 1)

                expect(product.createProduct(data)).toEqual("\"Qty\" must be greater than or equal to 1")

            else

                expect(product.createProduct(data)).toEqual("inserted successfully")

        }

    })

})


describe("product", function () {

    it("valid product inserted successfully", () => {

        const data = { id: 123, Name: "test", Price: 50, Qty: 5, Total: 50, Discount: 10 };

        expect(product.createProduct(data)).toEqual("inserted successfully")

    })

})

