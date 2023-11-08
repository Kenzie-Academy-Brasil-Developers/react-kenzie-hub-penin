import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
    return (
        <div className={styles.selectContainer}>
            <label className="label">{label} </label>
            <select className={styles.select} ref={ref} {...rest}>
                {children}
            </select>
            {error ? <p className="error">{error.message}</p> : null}
        </div>
    )
})