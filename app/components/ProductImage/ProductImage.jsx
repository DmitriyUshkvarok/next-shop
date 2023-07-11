'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './productImage.module.css';

const ProductImage = ({ product, fill }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {fill ? (
        <div className={styles.productImgContainer}>
          {loading && <div className={styles.loader}>Loading...</div>}
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={400}
            className={styles.productImg}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={400}
          className={styles.productImg}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  );
};

export default ProductImage;
