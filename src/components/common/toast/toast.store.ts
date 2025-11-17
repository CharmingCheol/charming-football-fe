import { create } from "zustand";

interface Toast {
    id: number;
    message: string;
}

interface ToastStore {
    toasts: Toast[];
    add: (message: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
    toasts: [],
    add: (message: string) => {
        const id = Date.now();
        set((state) => ({ toasts: [...state.toasts, { id, message }] }));
        setTimeout(() => {
            set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }));
        }, 3000);
    },
}));
