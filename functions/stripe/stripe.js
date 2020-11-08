// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY)

const handler = async event => {
  // This function should receive the complete object that represents the state of our shopping cart
  // at checkout, and then based on that cart we will create a session id with stripe which will
  // display that cart as checkout.

  // For the time, it is just creating a random t-shirt product with no input from client.
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 13,
      },
    ],
    mode: "payment",
    success_url: "https://eru-stripe-checkout.netlify.app/",
    cancel_url: "https://eru-stripe-checkout.netlify.app/",
  })
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
