import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefautTemplate = ({ children, user, userLogout }) => {
    return (
        <>
            <Header user={user} userLogout={userLogout} />
            {children}
            <Footer />
        </>
    )
}