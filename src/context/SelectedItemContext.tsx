'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedItem {
  id: string;
  name: string;
}

interface SelectedItemContextType {
  selectedItem: SelectedItem | null;
  setSelectedItem: (item: SelectedItem | null) => void;
}

const SelectedItemContext = createContext<SelectedItemContextType | undefined>(undefined);

export function SelectedItemProvider({ children }: { children: ReactNode }) {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
}

export function useSelectedItem() {
  const context = useContext(SelectedItemContext);
  if (context === undefined) {
    throw new Error('useSelectedItem must be used within a SelectedItemProvider');
  }
  return context;
} 