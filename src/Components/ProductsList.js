import React, { useState, useEffect } from 'react'
import { Products } from './Products'
import { fs } from '../Config/Config'
import { useNavigate } from 'react-router-dom'



export const ProductsList = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    // Function to navigate to the ProductsList
    const goToProductsList = () => {
        navigate('/AddProduct'); // Use the correct path for your ProductsList component
    };



    // getting products function
    const getProducts = async () => {
        const productsSnapshot = await fs.collection('Products').get();
        const productsArray = productsSnapshot.docs.map(snap => {
            return { ID: snap.id, ...snap.data() };
        });
        setProducts(productsArray);
    }

    useEffect(() => {
        getProducts();
    }, []);

   

    return (
        <div>
            {products.length > 0 ? (
                <div className='container-fluid'>
                    <h1 className='text-center'>Products</h1>
                    <div className='products-box'>
                        <Products products={products}/>
                        <button onClick={goToProductsList}>Add product</button>

                    </div>
                </div>
            ) : (
                <div className='container-fluid'>Please wait....</div>
            )}
        </div>
    )
}

