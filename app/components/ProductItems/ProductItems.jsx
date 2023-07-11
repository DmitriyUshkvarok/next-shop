import Link from 'next/link';
import ProductImage from '../ProductImage/ProductImage';
import styles from './productItem.module.css';

const ProductItems = async ({ product }) => {
  return (
    <>
      <Link prefetch={false} href={`/product/${product.id}`}>
        <li key={product.id} className={styles.productItem}>
          <div>
            <ProductImage product={product} />
          </div>
          <div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ProductItems;
