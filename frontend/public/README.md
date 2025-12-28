# GuitarDex - Maquette HTML/CSS

Maquette élégante et sobre pour un catalogue de guitares, sans JavaScript.

## 📁 Fichiers fournis

- **index.html** - Structure HTML de la maquette
- **styles.css** - Feuille de styles CSS indépendante
- **guitares.json** - Données JSON avec le champ `image` ajouté
- **README.md** - Ce fichier d'instructions

## 🎨 Caractéristiques

- Design sobre et professionnel
- Palette de couleurs élégante (gris/bleu/beige)
- Responsive design (mobile, tablette, desktop)
- Images depuis Unsplash (réutilisables)
- Structure par type de guitare
- Cartes avec image latérale

## 🎸 Structure des données mise à jour

Le fichier `guitares.json` inclut maintenant le champ **image** :

```json
{
  "id": 1,
  "marque": "Fender",
  "modele": "Stratocaster American Professional II",
  "type": "électrique",
  "prix": 1899,
  "annee": 2023,
  "couleur": "Sunburst",
  "image": "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400&h=600&fit=crop"
}
```

## 📸 Images utilisées

Les images proviennent d'Unsplash et sont libres d'utilisation :
- Format : 400x600px (optimisé)
- Qualité : Haute résolution
- Vous pouvez remplacer les URLs par vos propres images

## 🚀 Intégration dans une application React

### Option 1 : Remplacement complet du CSS par défaut

1. **Supprimez** le fichier `src/index.css` de votre projet React
2. **Copiez** `styles.css` dans `src/`
3. **Modifiez** `src/index.js` (ou `src/main.jsx` pour Vite) :

```javascript
// Remplacez cette ligne :
import './index.css';

// Par celle-ci :
import './styles.css';
```

### Option 2 : Import en tant que module CSS

1. **Renommez** `styles.css` en `GuitarDex.module.css`
2. **Copiez** le fichier dans `src/components/` ou `src/styles/`
3. **Importez** dans votre composant :

```javascript
import styles from './GuitarDex.module.css';
```

### Option 3 : Import global

1. **Copiez** `styles.css` dans `src/`
2. **Importez** dans `src/App.js` ou `src/index.js` :

```javascript
import './styles.css';
```

## 📋 Utilisation recommandée

### Structure de composants React suggérée

```
src/
├── components/
│   ├── Header.jsx
│   ├── Filters.jsx
│   ├── GuitarCard.jsx
│   ├── TypeSection.jsx
│   └── Footer.jsx
├── data/
│   └── guitares.json
├── styles/
│   └── GuitarDex.css (ancien styles.css)
├── App.jsx
└── index.js
```

### Exemple d'implémentation React

```javascript
// App.jsx
import React, { useState } from 'react';
import guitaresData from './data/guitares.json';
import './styles/GuitarDex.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('tous');

  // Votre logique de filtrage ici
  
  return (
    <div className="container">
      {/* Utilisez les classes CSS de la maquette */}
    </div>
  );
}

export default App;
```

## 🎯 Classes CSS principales

### Layout
- `.container` - Conteneur principal
- `.header` - En-tête
- `.filters` - Zone de filtres
- `.guitars-grid` - Grille de guitares
- `.footer` - Pied de page

### Composants
- `.guitar-card` - Carte de guitare
- `.card-image` - Zone image
- `.card-content` - Zone contenu
- `.card-badge` - Badge de type
- `.type-section` - Section par type
- `.type-header` - Titre de section

### Formulaires
- `.search-input` - Champ de recherche
- `.select-input` - Liste déroulante
- `.filter-label` - Label de filtre

## 🎨 Variables CSS personnalisables

Le fichier CSS utilise des variables CSS pour faciliter la personnalisation :

```css
:root {
  --color-primary: #2c3e50;
  --color-secondary: #34495e;
  --color-accent: #c0a080;
  --color-text: #2c3e50;
  --color-bg: #f8f9fa;
  /* ... et bien d'autres */
}
```

Modifiez ces valeurs pour changer la palette de couleurs.

## 📱 Responsive Breakpoints

- **Mobile** : < 480px
- **Tablette** : 481px - 768px
- **Desktop** : 769px - 1024px
- **Large Desktop** : > 1024px

## ⚡ Prochaines étapes (votre part de développement)

1. **Créer les composants React** pour chaque section
2. **Implémenter la logique de filtrage** (recherche et type)
3. **Gérer l'état** avec useState/useContext
4. **Ajouter les interactions** (tri, détails, favoris, etc.)
5. **Optimiser les performances** (React.memo, useMemo)

## 💡 Conseils d'intégration

- Les classes CSS sont prêtes à l'emploi
- Aucune modification CSS nécessaire
- Conservez la structure HTML pour garder le design
- Utilisez les mêmes noms de classes dans vos composants React

## 📝 Notes importantes

- **Pas de JavaScript fourni** - À vous de le coder !
- **Design sobre** - Pas de couleurs vives comme le Pokédex
- **Images Unsplash** - Remplaçables par vos propres URLs
- **CSS indépendant** - Compatible avec n'importe quel framework

## 🔧 Personnalisation

Pour changer le style, modifiez directement les variables CSS dans `:root` ou créez un thème dark/light en ajoutant :

```css
[data-theme="dark"] {
  --color-bg: #1a1a1a;
  --color-white: #2c2c2c;
  --color-text: #e0e0e0;
  /* ... */
}
```

Bon développement ! 🎸
