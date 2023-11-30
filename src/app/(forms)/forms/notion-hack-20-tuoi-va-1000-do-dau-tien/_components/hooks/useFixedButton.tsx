import { create } from "zustand";

interface FixedButtonState {
  isShowed: boolean;
  show: () => void;
  hidden: () => void;
}

const useFixedButtonStore = create<FixedButtonState>((set) => ({
  isShowed: false,
  show: () => set(() => ({ isShowed: true })),
  hidden: () => set(() => ({ isShowed: false })),
}));

export default useFixedButtonStore;
