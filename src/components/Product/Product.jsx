import './Product.scss';

export const Product = ({ title, price }) => (
  <div className={`Product ${price === 0
    ?
    'Product--free'
    : ''}`}>
    <h2 className="Product__title">{title}</h2>

    <div className="Product__price">
      {`Price: ${price} `}

      {price === 0 && <span>*</span>}
    </div>
  </div>
);
