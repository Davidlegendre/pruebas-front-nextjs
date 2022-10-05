import Config from "../configs/api.config";

interface IHandlersProducts {
    productsGetAllHandler: (token: string) => Promise<any>,
    productGetOneHandler: (token: string, id: string) => Promise<any>,
    productCreateHandler: (token: string, ProductReg: IProductReg) => Promise<any>,
    productPatchHandler: (token: string,id: string, ProductReg: IProductReg) => Promise<any>,
    productDeleteHandler:(token: string,id: string) =>Promise<any>
}

interface IProductReg {
    productName: string;
    description: string;
    price: string
}

const productsGetAll = async(token: string) => {
    
   const result = await fetch(Config().productsGetAllURL, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        }
    }).then((res) => res.json())
    .catch()

    return result?.products
}

const productGetOne = async(token: string, id: string) => {
    const result = await fetch(Config(id).productsGetOneURL, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        }
    }).then((res) => res.json())
    .catch();

    return result
}



const productCreate = async(token: string, ProductReg: IProductReg) => {
    const result = await fetch(Config().productsPostURL, {
        method: "POST",
        body: JSON.stringify(ProductReg),
        headers: {
            'content-type': 'application/json',
            Authorization: "Bearer " + token,
        }
    }).then((res) => res.json())
    .catch();

    return result
}

const productPatch = async(token: string,id: string, ProductReg: IProductReg) => {
    const result = await fetch(Config(id).productsPatchURL, {
        method: "PATCH",
        body: JSON.stringify(ProductReg),
        headers: {
            'content-type': 'application/json',
            Authorization: "Bearer " + token,
        }
    }).then((res) => res.json())
    .catch();

    return result
}

const productDelete = async(token: string,id: string) => {
    const result = await fetch(Config(id).productsPatchURL, {
        method: "DELETE",
        headers: {
            'content-type': 'application/json',
            Authorization: "Bearer " + token,
        }
    }).then((res) => res.json())
    .catch();

    return result
}


  const HandlersProducts = (): IHandlersProducts => {
    return {
      productsGetAllHandler: productsGetAll,
      productCreateHandler: productCreate,
      productDeleteHandler: productDelete,
      productGetOneHandler: productGetOne,
      productPatchHandler: productPatch
    };
  };

  export default HandlersProducts