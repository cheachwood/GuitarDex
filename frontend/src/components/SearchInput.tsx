import type { SearchInputProps } from '../types';

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {' '}
      <div className="filter-group">
        <label htmlFor="search" className="filter-label">
          Rechercher
        </label>
        <input type="text" id="search" className="search-input" placeholder="Marque ou modèle..." onChange={handleChange} value={value} />
      </div>
    </div>
  );
};
