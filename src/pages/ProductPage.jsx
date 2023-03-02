import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productsPages/ProductInfo'
import SimilarProducts from '../components/productsPages/SimilarProducts'
//importacion del css
import './../pages/styles/productPage.css'


const ProductPage = () => {

  const { id } = useParams()

  const [product, setProduct] = useState(   )

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
    axios.get(url)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  },[id])

  return (
    <div className='box_productPage'>
      <ProductInfo 
        product={product}
      />
      <div className='box_productSimilarPages'>
        <SimilarProducts
          category={product?.category}
          productId={product?.id}
        />
      </div>
      
    </div>
  )
}

export default ProductPage