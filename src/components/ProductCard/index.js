import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData, quantity, availableQuantity} = props
  const {title, brand, imageUrl, rating, price, id} = productData

  return (
    <Link to={`/products/${id}`} className="link-item">
      <li className="product-item">
        <img src={imageUrl} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
        </div>
      </li>
    </Link>
  )
}
export default ProductCard
