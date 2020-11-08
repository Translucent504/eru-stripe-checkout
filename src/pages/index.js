import React, { useRef } from "react"

import { useEffect } from "react"
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
      successUrl: "http://localhost:8888/",
      cancelUrl: "http://localhost:8888/",
    })
    if (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Products buy={buyItem} />
    </>
  )
}

export default IndexPage
