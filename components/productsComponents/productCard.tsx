
const ProductCard = ({Producto}) =>{
    return (
        <div key={Producto._id} className="m-4 p-4 rounded bg-neutral-500 text-white">
            <p>{Producto.productName}</p>
            <p>{Producto.description}</p>
            <p>{Producto.price}</p>
            <button onClick={()=>{
                console.log(Producto._id)
            }}>Ver producto</button>
        </div>
    )
}

export default ProductCard