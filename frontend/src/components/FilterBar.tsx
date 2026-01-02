import type { FilterBarProps } from '../types';
import { GuitarCounter } from './GuitarCounter';
import { SearchInput } from './SearchInput';
import { TypeSelect } from './TypeSelect';

export const FilterBar = ({ selectedType, typesSelect, onChangeSelect, valueSearch, onChangeSearch }: FilterBarProps) => {
  return (
    <section className="filters">
      <SearchInput value={valueSearch} onChange={onChangeSearch} />
      <TypeSelect types={typesSelect} onChange={onChangeSelect} selectedType={selectedType} />
      <GuitarCounter />
    </section>
  );
};
