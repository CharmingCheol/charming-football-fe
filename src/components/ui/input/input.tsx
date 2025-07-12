import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./input.module.scss";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ className = "", ...props }, ref) => {
        return <input ref={ref} className={`${styles.input} ${className}`} {...props} />;
    }
);

Input.displayName = "Input";

export default Input;
