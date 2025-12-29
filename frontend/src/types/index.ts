export const GUITAR_TYPES_OPTIONS = [
  { value: 'electrique', label: 'Electrique' },
  { value: 'classique', label: 'Classique' },
  { value: 'folk', label: 'Folk' },
] as const;

// Type dérivé automatiquement
export type GuitareTypeValue = (typeof GUITAR_TYPES_OPTIONS)[number]['value'];
export type GuitareType = 'tous' | GuitareTypeValue;

// 3. Interface Guitare utilise le type de base
export interface Guitare {
  id: number;
  marque: string;
  modele: string;
  type: GuitareTypeValue;
  annee: number;
  couleur: string;
  image: string;
}

export interface TypeSelectProps {
  selectedType: GuitareType;
  types: typeof GUITAR_TYPES_OPTIONS;
  onChange: (value: GuitareType) => void;
}

export interface FilterBarProps {
  selectedType: GuitareType;
  typesSelect: typeof GUITAR_TYPES_OPTIONS;
  onChangeSelect: (value: GuitareType) => void;
}
