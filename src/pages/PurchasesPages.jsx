import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../components/purchasesPages/PurchaseCard'
import config from '../utilits/getConfig'
import './../pages/styles/purchasePages.css'

const PurchasesPages = () => {

  const [purchases, setPurchases] = useState()
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/purchases`
    axios.get(url, config)
      .then(res => setPurchases(res.data))
      .catch(err => console.log(err.response))
  }, [])

  console.log(purchases)

  return (
    <div className='box_purchase_page'>
      <div className='box_purchase_card'>
        {
          purchases?.map(purchase => (
            <PurchaseCard
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PurchasesPages