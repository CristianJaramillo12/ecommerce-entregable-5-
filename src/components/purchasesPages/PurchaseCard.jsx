import React from 'react'
import './../../pages/styles/cardPurchase.css'

const PurchaseCard = ({ purchase }) => {
  return (
    <article className='box_card_purchase'>
      <header className='box_img_purchase'>
        <img className='img_purchase' src={purchase.product.images[0].url} alt="" />
      </header>
      <div className='box_info'>
        <h3 className='box_product_title'>{purchase.product.title}</h3>
        <div className='box_product_quantity'>{purchase.quantity}</div>
        <div className='box_product_price'>$ {purchase.product.price}</div>
      </div>
    </article>
  )
}

export default PurchaseCard