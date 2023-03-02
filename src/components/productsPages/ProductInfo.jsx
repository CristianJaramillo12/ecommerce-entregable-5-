import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utilits/getConfig'
//Importacion del css
import './../../pages/styles/productInfo.css'

const ProductInfo = ({ product }) => {

  const [counter, setCounter] = useState(1)

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1)
    }
  }

  const dispatch = useDispatch()

  const handleAddCart = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
    
    const data = {
      quantity: counter,
      productId: product.id
    }
    
    axios.post(url, data, config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
        setCounter(1)
      })
      .catch(err => console.log(err))
  }

  return (
    <article className='box_container_info'>
      <section  className='info_home'> 
        <p  className='home_link'> 
          <span><Link className='link_home' to='/'>Home</Link></span><span className='home_.'> . </span><span className='home_brand'>{product?.brand}</span>
        </p>
      </section>
      <section className='info_description'>
        <section className='description_image'>
          <img className='image_img_info' src={product?.images[0].url} alt="" />
        </section>

        <section className='description_caracterist'>
          <div className='caracterist_1'>
            <h3 className='uno_brand'>{product?.brand}</h3>
            <h2 className='uno_title'>{product?.title}</h2>
          </div>
          <div className='caracterist_2'>
            <p className='dos_description'>{product?.description}</p>
          </div>
          <div className='caracterist_3'>
            <div className='tres_price'>
              <h4 className='price_title_container'>Price</h4>
              <span className='price_number_letter'>{product?.price}</span>
            </div>
            <div className='price_title_container'>
              <h4 className='title_quantility'>Quantility</h4>
              <div className='quantility_add'>
                <div className='add- add_box' onClick={handleMinus}>-</div>
                <div className='add_number add_box'>{counter}</div>
                <div className='add+ add_box' onClick={handleAdd}>+</div>
              </div>
            </div>
          </div>
          <div className='caracterist_4'>
            <button onClick={handleAddCart} className='cuatro_button_add'>Add to car <i className='bx bx-cart'></i></button>
          </div>
        </section>
      </section>
    </article>
  )
}

export default ProductInfo