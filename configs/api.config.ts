export interface configApi {
    registerURL: string;
    loginURl: string,
    userDataURL: string,
    productsGetAllURL: string,
    productsGetOneURL: string,
    productsPostURL: string,
    productsPatchURL: string,
    productsDeleteURL: string
}

const url: string = "https://api-products-nu.vercel.app/"

const Config = (productID = ""): configApi => {
    return {        
        registerURL: url + "user/register",
        loginURl: url + "user/login",
        userDataURL: url + "user/getuser",
        productsGetAllURL: url + "products",
        productsGetOneURL: url + "products/getone/" + productID,
        productsPatchURL: url + "products/update/" + productID,
        productsDeleteURL: url + "products/delete/"+productID,
        productsPostURL: url + "products/create"
    }
}
export default Config