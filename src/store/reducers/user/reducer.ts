import { UserState, UserAction, SET_USER, REJECT_USER, initialState} from '.'

export const userReducer = (state = initialState, action: UserAction): UserState  => {
    switch(action.type) {
        case SET_USER: 
            return {...state, ...action.payload}
        case REJECT_USER:
            return initialState
        default:
            return state
    }
}