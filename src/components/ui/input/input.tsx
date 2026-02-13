import { type InputHTMLAttributes, forwardRef } from "react";
import * as Styles from "./input.styles";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ className = "", ...props }, ref) => {
        return <Styles.Input ref={ref} className={className} {...props} />;
    }
);

export default Input;
