import { Action } from "../../core/core.types"

export const HomeActions = {
    INIT_HOME: 'home/INIT_HOME'
}

export const initHome = (): Action<null> => ({
    type: HomeActions.INIT_HOME,
    payload: null
})
