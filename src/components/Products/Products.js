import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect } from "react"

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
            <td>Product Name</td>
            <td>Price</td>
            <td>Image</td>
            <td>BUY</td>
          </tr>
        </thead>
        <tbody>
          {data.prices.edges.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.product.name}</td>
              <td>{node.unit_amount}</td>
              <td>
                <img width="200px" src={node.product.images[0]} alt="" srcset="" />
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
