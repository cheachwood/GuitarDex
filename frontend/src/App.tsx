import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '../config';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FilterBar } from './components/FilterBar';
import { GuitarTable } from './components/GuitarTable';
import { GUITAR_TYPES_OPTIONS, type GuitareType } from './types';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [selectedType, setSelectedType] = useState<GuitareType>('tous');
  const [searchValue, setSearchValue] = useState<string>('');

  const handleOnChangeSelect = (value: GuitareType) => {
    setSelectedType(value);
  };

  const handleOnChangeSearch = (value: string) => {
    setSearchValue(value);
    console.log('Search Value:', value);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <Header />
          <FilterBar selectedType={selectedType} typesSelect={GUITAR_TYPES_OPTIONS} onChangeSelect={handleOnChangeSelect} valueSearch={searchValue} onChangeSearch={handleOnChangeSearch} />
          <GuitarTable />
          <Footer />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
