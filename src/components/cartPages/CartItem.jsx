import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utilits/getConfig'
import './../../pages/styles/cartItemPay.css'

const CartItem = ({ prodInfo }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`

    axios.delete(url, config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='box_product_unit'>
      <header className='box_img_cart'>
        <img className='img_cart_unit' src={prodInfo.product.images[0].url} alt="" />
      </header>
      <div className='box_info_product_cart'>
        <div className='cart_info_letter'>
          <h4 className='cart_info_brand'>{prodInfo.product.brand}</h4>
          <h3 className='cart_info_title'>{prodInfo.product.title}</h3>
        </div>
        <ul className='cart_info_price'>
          <li className='cart_ul_price'>
            <span className='cart_li_price_letter'>Unit price: </span>
            <span className='cart_li_price'>{prodInfo.product.price}</span>
          </li>
          <li className='cart_info_quantity cart_ul_price'>
            <span className='cart_letter_quantity'>Quantity: </span>
            <span className='cart_unit_quantity'>{prodInfo.quantity}</span>
          </li>
        </ul>
        <div>
          <button className='cart_button_pay' onClick={handleDelete}><i className='bx bx-trash'></i></button>
        </div>
      </div>

    </article>
  )
}

export default CartItem