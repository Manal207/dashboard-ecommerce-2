import React, { useState } from 'react'
import { storage } from '../Config/Config';
import { fs } from '../Config/Config';


export const AddProduct = () => {
    const [image,setImage]=useState(null);
    const [productName, setProductName]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const [pieces,setPieces]=useState('');

    const [imageError, setImageError]= useState('');

    const [successMsg, setSuccessMsg]= useState('');
    const [uploadError, setUploadError]= useState('');

    const types =['image/jpg','image/jpeg','image/png','image/PNG'];

    const handleProductImg=(e)=>{
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&types.includes(selectedFile.type)){
                setImage(selectedFile);
                setImageError('');
            }
            else{
                setImage(null);
                setImageError('please select a valid image file type (png or jpg)')
            }
        }
        else{
            console.log('please select your file');
        }
    }

    const handleAddProducts=(e)=>{
        e.preventDefault();
        // console.log(productName, category, price, pieces);
        // console.log(image);
        const uploadTask=storage.ref(`product-images/${image.name}`).put(image);
        uploadTask.on('state_changed',snapshot=>{
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log(progress);
        },error=>setUploadError(error.message),()=>{
            storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
                fs.collection('Products').add({
                    productName,
                    category,
                    price: Number(price), 
                    pieces: Number(pieces),
                    url
                }).then(()=>{
                    setSuccessMsg('Product added successfully');
                    setProductName('');
                    setCategory('');
                    setPrice(''); 
                    setPieces('');
                    document.getElementById('file').value='';
                    setImageError('');
                    setUploadError('');
                    setTimeout(()=>{
                        setSuccessMsg('');
                    },3000)
                }).catch(error=>setUploadError(error.message));
            })
        })
        
    }

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
            <form className='details' onSubmit={handleAddProducts}>
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
