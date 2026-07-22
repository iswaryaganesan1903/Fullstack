import React from 'react'

const Product = (prod) => {
    const {productDetail}=prod
  return (
   <>
   <div className='p-10 flex justify-center items-center'>
    <div className='bg-blue-200 h-60 w-60 flex flex-col justify-center items-center'>
        <p>{productDetail.productName}</p>
        <p>{productDetail.price}</p>
        <p>{productDetail.stockStatus}</p>
    </div>
   </div>
   </>
  )
}

export default Product