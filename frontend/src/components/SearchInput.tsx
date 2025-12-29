export const SearchInput = () => {
  return (
    <div>
      {' '}
      <div className="filter-group">
        <label htmlFor="search" className="filter-label">
          Rechercher
        </label>
        <input type="text" id="search" className="search-input" placeholder="Marque ou modèle..." />
      </div>
    </div>
  );
};
