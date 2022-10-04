import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import HandlersProducts from "../../Handlers/HandlersProducts";
import ProductsList from "../../components/productsComponents/Productslist";
import ProductCard from "../../components/productsComponents/productCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(() => {
    async function getProducts() {
      const { Token } = parseCookies();
      if (Token) {
        setIsLoading(true)
        const result = await HandlersProducts().productsGetAllHandler(Token);
        setProducts(result);
        setIsLoading(false)
      }
    }
    getProducts()
  }, []);

  return (
    <Layout title="Home">
      <ProductsList>
        {products.length !== 0 ? (
          products.map((p) => {
          
          return <ProductCard Producto={p}></ProductCard>
          }) 
          
        ) : (
          isLoading !== true ? <p>No hay Productos</p> : <p>Cargando</p>
        )}
      </ProductsList>
    </Layout>
  );
}
