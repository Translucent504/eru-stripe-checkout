import React, { useRef } from "react"

import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Products from "../components/Products/Products"
import getStripe from "../utils/stripe"

const IndexPage = () => {
  const stripeRef = useRef(null)
  useEffect(() => {
    ;(async () => {
      stripeRef.current = await getStripe()
    })()
  }, [])

  const buyItem = async id => {
    const { error } = await stripeRef.current.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: id, quantity: 1 }],
      successUrl: "https://eru-stripe-checkout.netlify.app/",
      cancelUrl: "https://eru-stripe-checkout.netlify.app/",
    })
    if (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
      <Products buy={buyItem} />
    </>
  )
}

export default IndexPage
