import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { URL_API } from '../../../config'

const Home = () => {
    const {pid} = useParams()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch( URL_API + 'api/products', {
            headers: {
                'Authorization': localStorage.getItem('auth-token-app')
            }
        })
        .then(res=>{
            return res.json()
        })
        .then(data =>{
            if(data.status ==  401){
                navigate('/')
            }
            console.log(data)
            setProducts(data.products)
        })
    }, [])
  return (
    <div>
        <h1>Lista de productos</h1>
        {products.length == 0 ? <h2>Cargando...</h2> : products.map(product =>
           /*  <Product key={product.Id} {...product}/> */
            <Product key={product.id} {...product}/>
        )}
    </div>
  )
}

export default Home

/* const Product = ({Nombre, Price, Stock, Id}) =>{
    return(
        <div>
        <h2>Nombre {Nombre}</h2>
        <p>Precio {Price}</p>
        <span>Stock: {Stock}</span>
        <br/>
        <Link to={'/detail/' + Id}>Ver Detalle </Link>
    </div>
    )
} */

const Product = ({nombre, precio, stock, id}) =>{
    return (
        <div >
            <h2>Nombre {nombre}</h2>
            <p>Precio {precio}</p>
            <span>Stock: {stock}</span>
            <br/>
            <Link to={'/detail/' + id}>Ver Detalle </Link>
        </div>
    )
}