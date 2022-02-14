import { useAppSelector } from "./useAppSelector"

export const useAuth = () => {
    const { id, email, token } = useAppSelector(state => state.userAuth)

    return {
        isAuth: !!email,
        id,
        email,
        token
    }
}