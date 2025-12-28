import type { GuitareType, TypeSelectPropos } from '../types';
import { GUITAR_TYPE_OPTIONS } from '../types';

export const TypeSelect = ({ value, onChange }: TypeSelectPropos) => {
  return (
    <div>
      {' '}
      <div className="filter-group">
        <label htmlFor="type-filter" className="filter-label">
          Type
        </label>
        <select id="type-filter" className="select-input" value={value} onChange={(e) => onChange(e.target.value as GuitareType)}>
          {GUITAR_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
