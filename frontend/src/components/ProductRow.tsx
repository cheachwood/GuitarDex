import type { ProductRowProps } from '../types';

export const ProductRow = ({ guitare }: ProductRowProps) => {
  return (
    <>
      <article className="guitar-card">
        <div className="card-image">
          <img src={guitare.image} alt="Fender Stratocaster" />
          <div className="card-badge">Électrique</div>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">{guitare.modele}</h3>
            <p className="card-brand">{guitare.marque}</p>
          </div>
          <div className="card-details">
            <div className="detail-item">
              <span className="detail-label">Prix</span>
              <span className="detail-value price">{guitare.prix}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Année</span>
              <span className="detail-value">{guitare.annee}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Couleur</span>
              <span className="detail-value">
                <span className="color-dot" style={{ background: 'linear-gradient(to bottom, #f4a460, #8b4513)' }}></span>
                {guitare.couleur}
              </span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
