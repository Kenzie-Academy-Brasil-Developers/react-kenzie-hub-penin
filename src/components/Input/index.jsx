import { forwardRef } from "react"
import styles from "./style.module.scss"

export const Input = forwardRef(({ children, label, error, ...rest }, ref) => {
    return (
        <div className={styles.input}>
            <label className="label">{label} </label>
            <input className="input" ref={ref} {...rest} />
            {children}
            {error ? <p className="error">{error.message}</p> : null}
        </div>
    )
})
