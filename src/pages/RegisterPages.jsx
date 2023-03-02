import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utilits/defaultValues'
import './../pages/styles/registerPage.css'

const Register = () => {

  const { register, handleSubmit, reset } = useForm()

  const submit = data => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users`
    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    reset(defaultValues)
  }

  return (
    <div className='box_container_form_register'>
      <h3>Register</h3>
      <form className='box_form_conteiner' onSubmit={handleSubmit(submit)}>
        
        <div className='box_input'>
          <label className='box_fist_name' htmlFor="FirstName">First Name</label>
          <input className='box_input1 input_first_name' {...register('firstName')} type="text" id='firstName' />
        </div>
        <div className='box_input'>
          <label className='' htmlFor="LastName">Last Name</label>
          <input className='box_input1 input_las_name' {...register('lastName')} type="text" id='lastName' />
        </div>
        <div className='box_input'>
          <label className='' htmlFor="email">Email</label>
          <input className='box_input1 input_register' {...register('email')} type="text" id='email' />
        </div>
        <div className='box_input'>
          <label className='' htmlFor="password">Password</label>
          <input className='box_input1 input_password' {...register('password')} type="password" id='password' />
        </div>
        <div className='box_input'>
          <label className='' htmlFor="phone">Phone</label>
          <input className='box_input1 input_phone' {...register('phone')} type="text" id='phone' />
        </div>
        <button className='button_register'>Register</button>
      </form>
    </div>
  )
}

export default Register