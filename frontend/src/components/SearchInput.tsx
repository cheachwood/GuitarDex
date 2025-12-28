import type { SearchInputProps } from '../types';

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div>
      {' '}
      <div className="filter-group">
        <label htmlFor="search" className="filter-label">
          Rechercher
        </label>
        <input type="text" id="search" className="search-input" placeholder="Marque ou modèle..." value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
};
