export const Header = () => {
  return (
    <div className="header">
      {' '}
      <div className="header-content">
        <h1 className="logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M7 7l10 10M7 17l10-10" />
          </svg>
          GuitarDex
        </h1>
        <p className="subtitle">Catalogue professionnel de guitares</p>
      </div>
    </div>
  );
};
