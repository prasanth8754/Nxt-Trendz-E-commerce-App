import './index.css'

const CartSummary = props => {
  const {cartList} = props

  const cartCount = cartList.length

  let totalAmount = 0
  cartList.forEach(eachItem => {
    totalAmount += eachItem.price * eachItem.quantity
  })

  return (
    <div className="checkout-cont">
      <div>
        <h1 className="summary-h1">
          <span className="summary-span">Order Total:</span> Rs {totalAmount}/-
        </h1>
        <p className="summary-p">{cartCount} items in cart</p>
      </div>
      <button type="button" className="checkout-btn">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
