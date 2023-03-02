import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import defaultValues from '../../utilits/defaultValues'
// importacion del css
import './../styles/logout.css'

export const LoginPages = () => {

  const [token, setToken] = useState()

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    console.log(data)
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/login`
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
      })
      .catch(err => {
        console.log(err)
        localStorage.clear()
      })
    reset(defaultValues)
  }

  const handleClick = () => {
    localStorage.clear()
    setToken()
  }

  if (localStorage.getItem('name')) {
    return (
      <div className='box_logout'>
        <div className='box_contain_logout'>
          <img className='img_logout' src="https://cdn-icons-png.flaticon.com/512/16/16363.png" alt="foto usuario" />
          <h2 className='name_logout'>{localStorage.getItem('name')}</h2>
          <button className='botton_logout' onClick={handleClick}>Logout</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='box_principal_login'>
        <h2 className=''>form Login</h2>
        <form className='box_form_login' onSubmit={handleSubmit(submit)}>
          <div className='form_input_login'>
            <label className='' htmlFor="email">Email</label>
            <input className='input_login_email' {...register('email')} type="text" id='email' />
          </div>
          <div className='form_input_login'>
            <label className='' htmlFor="password">Password</label>
            <input className='' {...register('password')} type="password" id='password' />
          </div>
          <button className='button_login_page'>login</button>
        </form>
        <Link className='go_to_regisgter' to='/user/register'>Go to register</Link>
      </div>
    )
  }
}
