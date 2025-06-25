import { create } from "zustand";

interface SidebarState {
  selected: string;
  setSelected: (select: string) => void;
}

export const useSidebar = create<SidebarState>((set) => ({
  selected: 'youtube',
  setSelected: (select: string) => set({ selected: select }),
}));




interface useContentState {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const useConteForm = create<useContentState>((set) => ({
  visible: false,
  setVisible: (value) => set({ visible: value }),
}));