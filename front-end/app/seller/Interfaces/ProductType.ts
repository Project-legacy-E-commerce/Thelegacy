export default interface Product {
    name: string,
    category: string,
    rate: string,
    status: number,
    initalprice: number,
    currentprice: number,
    imgurlmain: string,
    quantity: number,
    description: string,
    review_rates: [{
        comment: string,
        rateofuser: number,
        userIduser: number,
        productIdproduct: number
    }]
}
