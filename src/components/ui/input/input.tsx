import { type InputHTMLAttributes, forwardRef } from "react";
import * as S from "./input.styles";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ className = "", ...props }, ref) => {
        return <S.Input ref={ref} className={className} {...props} />;
    }
);

export default Input;
