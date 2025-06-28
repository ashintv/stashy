import { create } from "zustand";

interface SidebarState {
  selected: string;
  setSelected: (select: string) => void;
}


export const useSidebar = create<SidebarState>((set) => ({
  selected: 'youtube',
  setSelected: (select: string) => set({ selected: select }),
}));




interface useChatbotState {
  chatbot: boolean;
  setChatbot: (value: boolean) => void;
}
interface useContentState {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

export const useConteForm = create<useContentState>((set) => ({
  visible: false,
  setVisible: (value) => set({ visible: value }),
}));

export const useChatbot = create<useChatbotState>((set) => ({
  chatbot : false,
  setChatbot: (value) => set({ chatbot: value }),
}));

interface useLoadingState {
  loading: boolean
  setLoading: (value:boolean)=>void
}

export const useLoading = create<useLoadingState>((set)=> ({
  loading: false,
  setLoading: (value) => set({ loading: value }),

}))