export const GUITAR_TYPE_OPTIONS = [
  { value: 'électrique', label: 'Électrique' },
  { value: 'classique', label: 'Classique' },
  { value: 'folk', label: 'Folk' },
] as const;

// Type dérivé automatiquement
export type GuitareTypeValue = (typeof GUITAR_TYPE_OPTIONS)[number]['value'];

// 2. Type pour le filtre (ajoute "tous")
export type GuitareType = 'tous' | GuitareTypeValue;

// 3. Interface Guitare utilise le type de base
export interface Guitare {
  id: number;
  marque: string;
  modele: string;
  type: GuitareTypeValue; // ← Réutilise le type !
  prix: number;
  annee: number;
  couleur: string;
  image: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export interface TypeSelectPropos {
  value: GuitareType;
  onChange: (value: GuitareType) => void;
}

export interface CategoryRowProps {
  type: GuitareTypeValue;
}

export interface ProductRowProps {
  guitare: Guitare;
}

export interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  typeValue: GuitareType;
  onTypeChange: (value: GuitareType) => void;
  guitarCount: number;
}
export interface GuitarCounterProps {
  count: number;
}
