import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../home/CardProduct'
import './../../pages/styles/similarProducts.css'
function SimilarProducts({ category, productId }) {

  const [filterProducts, setFilterProducts] = useState()

  const { products } = useSelector(state => state)

  useEffect(() => {
    if (products && category) {
      setFilterProducts(products?.filter(product => product.category.id === category.id))
    }
  },[category, products])

  return (
    <div className='box_similar_pages'>
      <h2 className='paes_title_similar'>Discover similar products</h2>
      <div className='box_similar_products'>
        {
          filterProducts?.map(prod => {
            if(prod.id !== productId) {
              return <CardProduct 
              key={prod.id}
              product={prod}
            />
            }
          })
        }
      </div>
    </div>
  )
}

export default SimilarProducts