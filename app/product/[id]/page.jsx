import ProductImage from '@/app/components/ProductImage/ProductImage';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params: { id } }) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return (
      <>
        <ProductImage product={product} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </>
    );
  } catch (error) {
    notFound();
  }
};

export default ProductPage;
