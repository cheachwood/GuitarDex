export const ProductRow = () => {
  return (
    <>
      <article className="guitar-card">
        <div className="card-image">
          <img src="https://via.placeholder.com/400x600?text=Guitare" alt="Fender Stratocaster" />
          <div className="card-badge">Électrique</div>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">Modele</h3>
            <p className="card-brand">Marque</p>
          </div>
          <div className="card-details">
            <div className="detail-item">
              <span className="detail-label">Prix</span>
              <span className="detail-value price">prix</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Année</span>
              <span className="detail-value">année</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Couleur</span>
              <span className="detail-value">
                <span className="color-dot"></span>
                couleur
              </span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
