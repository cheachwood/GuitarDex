import type { FilterBarProps } from '../types';
import { GuitarCounter } from './GuitarCounter';
import { SearchInput } from './SearchInput';
import { TypeSelect } from './TypeSelect';

export const FilterBar = ({ searchValue, onSearchChange, typeValue, onTypeChange, guitarCount }: FilterBarProps) => {
  return (
    <section className="filters">
      <SearchInput value={searchValue} onChange={onSearchChange} />
      <TypeSelect value={typeValue} onChange={onTypeChange} />
      <GuitarCounter count={guitarCount} />
    </section>
  );
};
