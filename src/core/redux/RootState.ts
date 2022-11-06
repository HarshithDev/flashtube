import { IHomeState } from "../../pages/Home/home.state"

export interface RootState {}
export type IAppState = Readonly<{
    Home: IHomeState
}>
