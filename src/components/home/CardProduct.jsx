import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utilits/getConfig'
import './../../pages/styles/cardProduct.css'

const CardProduct = ({ product }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handBtnClick = e => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
    
    const data = {
      quantity: 1,
      productId: product.id
    }
    
    axios.post(url, data, config)
      .then(res => {
        console.log(res)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err.response))
    e.stopPropagation()
  }

  return (
    <article className='box_card' onClick={handleClick}>
      <header className='box_header_card'>
        <img className='box_card_img' src={product.images[0].url} alt="" />
      </header>
      <div className='box_card_info'>
        <div className='box_container_info'>
          <h3 className='box_info_brand'>{product.brand}</h3>
          <h2 className='box_info_title'>{product.title}</h2>
        </div>
        <div className='box_container_price'>
          <div className='box_card_price'>
            <h3 className='box_price_title box_info_brand'>Price</h3>
            <div className='box_price_product box_info_title'>{product.price}</div>
          </div>
          <button onClick={handBtnClick} className='box_card_button'>
            <i className='bx bx-cart bx_card'></i>
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardProduct