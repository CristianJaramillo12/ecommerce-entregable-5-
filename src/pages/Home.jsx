import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import { getAllProductsThunk, getProductsByName } from '../store/slices/products.slice'
//importacion del css 
import './../pages/styles/home.css'

const Home = () => {

  const [categories, setCategories] = useState()
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const { products } = useSelector(state => state)

  const dispatch = useDispatch(state => state)

  const handleSubmit = e => {
    e.preventDefault()
    const input = (e.target.inputSearch.value.trim().toLowerCase())
    dispatch(getProductsByName(input))
  }

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/categories`
    axios.get(url)
      .then(res => setCategories(res.data))
      .catch(err => console.log(err.response))
  }, [])

  const handleClickCategory = id => {
    dispatch(getProductsByName(id, true))
  }

  const hanldeSubmitPrice = e => {
    e.preventDefault()
    const from = Number(e.target.from.value.trim())
    const to = +e.target.to.value.trim()

    if (from && to) {
      setFromTo({ from, to })
    } else if (from && !to) {
      setFromTo({ from, to: Infinity })
    } else if (!from && to) {
      setFromTo({ from: 0, to })
    } else {
      setFromTo({ from: 0, to: Infinity })
    }
  }

  return (
    <div className='box_container_total'>
      <div className='home_filter_price'>
        <div className='home_price'>
          <div className='filter_categorys'>
            <h3 className='category_title'>Price</h3>
            <i className='bx bx-chevron-down bx_icon' ></i>
          </div>
          <form className='home_form_filter_price' onSubmit={hanldeSubmitPrice}>
            <div className='filter_price_input'>
              <div>
                <label htmlFor="from">From</label>
                <input type="number" id='from' />
              </div>
              <div>
                <label htmlFor="to">To</label>
                <input type="number" name="" id="to" />
              </div>
            </div>
            <button className='button_filter'>Filter Price</button>
          </form>
        </div>

        <div className='home_filter'>
          <header className='filter_categorys'>
            <h3 className='category_title'>Category</h3>
            <i className='bx bx-chevron-down bx_icon' ></i>
          </header>
          <ul className='box_category_list'>
            <li onClick={() => dispatch(getAllProductsThunk())} className='list_unit_category'>All products</li>
            {
              categories?.map(category => (
                <li className='list_unit_category' key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
              ))
            }
          </ul>
        </div>
      </div>



      <div className='box_container_cards'>
        <form className='home_form' onSubmit={handleSubmit}>
          <input className='home_form_input' placeholder='What are you looking for?' type="text" id="inputSearch" />
          <button className='home_form_button'>
            <i className='bx bx-search-alt-2'></i>
          </button>
        </form>
        <div className='box_home'>
          {
            products?.length === 0 ?
              <h1>❌This product doesn't exists❌</h1>
              :
              products?.filter(product => +product.price >= fromTo.from && +product.price <= fromTo.to).map(product => (
                <CardProduct
                  key={product.id}
                  product={product}
                />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home