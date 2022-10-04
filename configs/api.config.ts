export interface configApi {
    registerURL: string;
    loginURl: string,
    userDataURL: string
}

const url: string = "https://api-products-nu.vercel.app/"

const Config = (): configApi => {
    return {        
        registerURL: url + "user/register",
        loginURl: url + "user/login",
        userDataURL: url + "user/getuser"
    }
}
export default Config