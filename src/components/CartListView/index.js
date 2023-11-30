import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = ({totalAmount}) => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <div>
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} totalAmount={eachCartItem.quantity * eachCartItem.price}/>
          ))}
          </ul>
          <div className="total-amount-container">
            <span className="total-amount-label">Total Amount:</span>
            <span className="total-amount">Rs {totalAmount}/-</span>
          </div>
        </div> 
      )
    }}
  </CartContext.Consumer>
  
)

export default CartListView
