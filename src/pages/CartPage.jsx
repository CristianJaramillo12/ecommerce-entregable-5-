import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/cartPages/CartItem'
import { getCartThunk } from '../store/slices/cart.slice'
import config from '../utilits/getConfig'
import './../pages/styles/cartPagePay.css'

const CartPage = () => {

  const { cart } = useSelector(state => state) 
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const result = cart?.reduce((acu, cv) => acu + cv.quantity * Number(cv.product.price), 0)
    setTotalPrice( result )
  },[cart])

  const dispatch = useDispatch()

  const handlePurchase= () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
    axios.post(url, {} , config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className='box_conteiner_cart'>
      <div className='box_item_cart'>
        {
          cart?.map(prodInfo => (
            <CartItem 
              key={prodInfo.id}
              prodInfo={prodInfo}
            />
          ))
        }
      </div>
      <div className='box_letter_cart'>
        <h1 className='box_latter_total'><span>TOTAL: </span><span>$ {totalPrice}</span></h1>
        <button className='box_buy_button' onClick={handlePurchase}>Chekout</button>
      </div>
    </div>
  )
}

export default CartPage