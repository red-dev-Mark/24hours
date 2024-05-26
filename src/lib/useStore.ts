import { subDays } from "date-fns";
import { createStore } from "zustand/vanilla";

export type DayState = {
  day: Date;
  count: String;
};

export type DayActions = {
  setDay: (newDate: Date) => void;
  setCount: (count: String) => void;
};

export type DayStore = DayState & DayActions;

// export const initDayStore = (): DayState => {
//   return { day: new Date() };
// };

export const defaultInitState: DayState = {
  day: new Date(),
  count: "0",
};

export const createDayStore = (initState: DayState = defaultInitState) => {
  return createStore<DayStore>()((set) => ({
    ...initState,
    setDay: (newDate: Date) => set(() => ({ day: newDate })),
    setCount: (newCount: String) => set(() => ({ count: newCount })),
  }));
};
