import type { FilterBarProps } from '../types';
import { GuitarCounter } from './GuitarCounter';
import { SearchInput } from './SearchInput';
import { TypeSelect } from './TypeSelect';

export const FilterBar = ({ selectedType, typesSelect, onChangeSelect }: FilterBarProps) => {
  return (
    <section className="filters">
      <SearchInput />
      <TypeSelect types={typesSelect} onChange={onChangeSelect} selectedType={selectedType} />
      <GuitarCounter />
    </section>
  );
};
