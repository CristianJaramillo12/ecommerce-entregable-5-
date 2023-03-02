import React, { useState } from 'react'
import './../../pages/styles/sliderImg.css'

const Slider = ({ product }) => {

  const [imgSelector, setImgSelector] = useState()

  const styleMovimiment = {
    transform: `translateX(calc(-${imgSelector}/3 * 100%))`
  }

  const handlePrevius = () => {
    if (imgSelector - 1 < 0) {
      setImgSelector(product.images.length - 1)
    } else {
      setImgSelector(imgSelector - 1)
    }
    
  }

  const handleNext = () => {
    if (imgSelector + 1 > product.images.length - 1) {
      setImgSelector(0)
    } else {
      setImgSelector(imgSelector + 1)
    }
  }

  return (
    <div className='slider'>
      <button onClick={handlePrevius} className='slider_btn slider_btn_left'><i className='bx bx-chevron-left'></i></button>
      <div style={styleMovimiment} className='slider_moviment'>
        {
          product?.images.map(img => (
            <div key={img.id} className='slider_conteiner_img'>
              <img className='slider__img' src={img.url} alt="" />
            </div>
          ))
        }
      </div>
      <button className='slider_btn slider_btn_right'><i className='bx bx-chevron-right'></i></button>
    </div>
  )
}

export default Slider