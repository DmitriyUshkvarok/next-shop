import ProductItems from './components/ProductItems/ProductItems';
import styles from './page.module.css';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return (
    <main className={styles.main}>
      <section className={styles.homeSection}>
        <h1 className={styles.homeTitle}>Deals of the day</h1>
        <ul>
          {products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </main>
  );
}
