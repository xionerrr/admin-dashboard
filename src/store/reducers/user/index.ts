export const SET_USER = "SET_USER"
export const REJECT_USER = "REJECT_USER"


export interface UserState {
    id: string,
    email: string,
    token: string,
}

export interface UserAction {
    type?: string,
    payload?: any
}

export interface SetUserPayload {
    id: string,
    email: string,
    token: string,
}

export const initialState:UserState = {
    id: '',
    email: '',
    token: '',
}