import { CategoryRow } from './CategoryRow';
import { ProductRow } from './ProductRow';

export const GuitarTable = () => {
  return (
    <div>
      <main className="guitars-grid">
        <div className="type-section">
          <CategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
        </div>

        <div className="type-section">
          <CategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
        </div>

        <div className="type-section">
          <CategoryRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />{' '}
        </div>
      </main>
    </div>
  );
};
