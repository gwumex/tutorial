import React from 'react'
import useCart from '../hooks/useCart'

type PropsType = {
    viewCart: boolean,
}

const Footer = ({viewCart}: PropsType) => {
    const {totalItems, totalPrice} = useCart()
    const year: number = new Date().getFullYear()
    const pagecontent = viewCart ? <p>Shopping Cart &copy; {year}</p>: (
    <>
    <p>Totl items: {totalItems}</p>
    <p>Totl price: {totalPrice}</p>
    <p>Shopping Car &copy;: {year}</p>
    </>)

    const content = (
        <footer className='footer'>
            {pagecontent}
        </footer>
    )
  return content
}

export default Footer