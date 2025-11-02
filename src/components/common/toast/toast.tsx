import { useToastStore } from "./toast.store";
import * as S from "./toast.styles";

const Toast = () => {
    const { toasts } = useToastStore();

    if (toasts.length === 0) {
        return null;
    }

    return (
        <S.ToastContainer>
            {toasts.map((toast) => (
                <S.ToastItem key={toast.id}>
                    <span>{toast.message}</span>
                </S.ToastItem>
            ))}
        </S.ToastContainer>
    );
};

export default Toast;
