import React, { useState } from 'react'


export const AddProduct = () => {
    const [image,setImage]=useState(null);
    const [productName, setProductName]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const [pieces,setPieces]=useState('');

    const [imageError, setImageError]= useState('');

    const [successMsg, setSuccessMsg]= useState('');
    const [uploadError, setUploadError]= useState('');

  return (
    <div className='box1'>
        <div className='img-section'>
            <label>Add image</label>
            <input type="file" id="file" className='file' onChange={handleProductImg}></input>

            {imageError&&<>
                    <br></br>
                    <div className='error-msg'>{imageError}</div>
            </>}
            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
            </>}
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}

        </div>
        <div className='prod-details'>
            <form className='details'>
                <label>Product Name</label>
                <input type="text" className="form-control" onChange={(e)=>setProductName(e.target.value)} value={productName}></input>
                <br></br>
                <label>Category</label>
                <input type='text' className='form-control' onChange={(e)=>setCategory(e.target.value)} value={category}></input>
                <br></br>
                <label>Price</label>
                <input type='number' className='form-control' onChange={(e)=>setPrice(e.target.value)} value={price}></input>
                <br></br>
                <label>Pieces</label>
                <input type='number' className='form-control' onChange={(e)=>setPieces(e.target.value)} value={pieces}></input>
                <br></br>
                <button type='submit' className='btn-submit'> Add Product</button>
                

            </form>
        </div>
    </div>
  )
}
