"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import {
  type DayStore,
  createDayStore,
  // initDayStore
} from "@/lib/useStore";

export const DayStoreContext = createContext<StoreApi<DayStore> | null>(null);

export interface DayStoreProviderProps {
  children: ReactNode;
}

export const DayStoreProvider = ({ children }: DayStoreProviderProps) => {
  const storeRef = useRef<StoreApi<DayStore>>();
  if (!storeRef.current) {
    storeRef.current = createDayStore();
    // initDayStore();
  }

  return (
    <DayStoreContext.Provider value={storeRef.current}>
      {children}
    </DayStoreContext.Provider>
  );
};

export const useDayStore = <T,>(selector: (store: DayStore) => T): T => {
  const dayStoreContext = useContext(DayStoreContext);

  if (!dayStoreContext) {
    throw new Error(`useDayStore must be use within DayStoreProvider`);
  }

  return useStore(dayStoreContext, selector);
};
