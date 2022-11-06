import { combineEpics } from "redux-observable";
import HomeEpic from './../../pages/Home/home.epic'

export default combineEpics(
    ...HomeEpic
)
