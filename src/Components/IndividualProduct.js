import React from 'react'
import '../CSSFiles/ProductsList.css'
import { ReactComponent as TrashIcon } from '../icons/trash.svg';
import { fs } from '../Config/Config';


export const IndividualProduct = ({individualProduct, onDelete}) => {
    console.log(individualProduct);

    const deleteProductById = async (individualProductId) => {
        try {
          await fs.collection('Products').doc(individualProductId).delete();
          console.log('Product successfully deleted!');
        } catch (error) {
          console.error('Error deleting product: ', error);
        }
    };

    const handleDelete = async () => {
        await deleteProductById(individualProduct.ID);
        onDelete(individualProduct.ID);

        // Optionally, trigger a state update to reflect the change in the UI
    };



    return (
        <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='col1'>
                <div className='product-text productName'>Product Name : {individualProduct.productName}</div><br></br>
                <div className='product-text category'>Product Category : {individualProduct.category}</div>
            </div>
            <div className='col2'>
                <div className='product-text price'>Product Price : $ {individualProduct.price}</div><br></br>
                <div className='product-text pieces'>Number of pieces : {individualProduct.pieces}</div>
            </div>
            <div style={{cursor: 'pointer'}} onClick={handleDelete}><TrashIcon className="trash-icon" /></div>
        </div> 
    )
}