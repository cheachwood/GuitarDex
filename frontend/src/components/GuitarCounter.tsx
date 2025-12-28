import type { GuitarCounterProps } from '../types';

export const GuitarCounter = ({ count }: GuitarCounterProps) => {
  return (
    <div>
      <div className="results-count">
        <span className="count-number">{count}</span> guitares trouvées
      </div>
    </div>
  );
};
