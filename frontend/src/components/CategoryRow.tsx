import type { CategoryRowProps } from '../types';

export const CategoryRow = ({ type }: CategoryRowProps) => {
  return (
    <div>
      <h2 className="type-header">{type}</h2>
    </div>
  );
};
