import { SET_USER, REJECT_USER, SetUserPayload } from ".";

export const setUser = (payload: SetUserPayload) => ({
    type: SET_USER,
    payload
})

export const rejectUser = () => ({
    type: REJECT_USER
})