import { type GuitareType, type TypeSelectProps } from '../types';

export const TypeSelect = ({ selectedType, types, onChange }: TypeSelectProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as GuitareType);
  };
  return (
    <div>
      {' '}
      <div className="filter-group">
        <label htmlFor="type-filter" className="filter-label">
          Type
        </label>
        <select id="type-filter" className="select-input" onChange={handleChange} value={selectedType}>
          <option key="tous" value="tous">
            Tous
          </option>
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
