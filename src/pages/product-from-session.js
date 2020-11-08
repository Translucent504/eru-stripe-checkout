import React, { useEffect, useRef } from "react"
import getStripe from "../utils/stripe"

const ProductFromSession = () => {
  const stripeRef = useRef(null)
  useEffect(() => {
    ;(async () => {
      stripeRef.current = await getStripe()
    })()
  })

  const handleClick = async event => {
    const response = await fetch("/.netlify/functions/stripe", {
      method: "POST",
    })
    const session = await response.json()
    const result = await stripeRef.current.redirectToCheckout({
      sessionId: session.id,
    })

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      console.log(result.error)
    }
  }
  return (
      <>
      <h1>Try Checkout from serverless stripe backend:</h1>
      <button onClick={handleClick}>CHECKOUT</button>
      </>
  )
}

export default ProductFromSession
