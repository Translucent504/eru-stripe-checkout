import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import './Products.css'

const GET_ALL_PRICES = graphql`
  query MyQuery {
    prices: allStripePrice {
      edges {
        node {
          product {
            id
            name
            description
            images
          }
          id
          unit_amount
        }
      }
    }
  }
`

const Products = ({ buy }) => {
  const data = useStaticQuery(GET_ALL_PRICES)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>BUY</th>
          </tr>
        </thead>
        <tbody>
          {data.prices.edges.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.product.name}</td>
              <td>{node.unit_amount/100}</td>
              <td>
                <img
                  width="200px"
                  src={node.product.images[0]}
                  alt=""
                  srcset=""
                />
              </td>
              <td>
                <button onClick={() => buy(node.id)}>BUY</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Products
