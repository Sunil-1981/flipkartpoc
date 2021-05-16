import React,{ useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import data from '../Data/data'
import HeaderPanel from '../Header/HeaderPanel'

const ViewAllProducts = () => {

    const[products,setProducts] = useState([])

    useEffect(() => {
        const proddata=data;
        
        setProducts(proddata);
        
    }, [])

    return (
        <div>
             <HeaderPanel />
             <div style={{ display: "flex", flexWrap: "wrap", marginTop:'20px' }}>
                {products.map((item)=>(

                    <ProductCard 
                        image={item.image}
                        name={item.name}
                        rating={item.rating}
                        actualprice={item.actualPrice}
                        offerprice={item.offerPrice}
                    />
                ))}
            </div>
                

        </div>
    )
}

export default ViewAllProducts
