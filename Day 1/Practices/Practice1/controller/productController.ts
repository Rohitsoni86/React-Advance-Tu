import ProductInfo from "../models/productModel";

export class Product {
    product: ProductInfo

    createProduct(product: ProductInfo) {
        this.product = product;
        return "Created Product Success !!!"
    }

    getAllProduct() {
        return this.product
    }

    calculateNetAmount() {
        const netAmount = this.product.Total * ((100 - this.product.Discount) / 100);
        return netAmount;
    }

    calculateDiscount() {
        const discountvalue = this.product.Total * (this.product.Discount / 100);
        return discountvalue;
    }
}
