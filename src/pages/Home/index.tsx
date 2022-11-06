import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HamburgerNav from '../../components/HamburgerNav/HamburgerNav'
import { IDefaultComponent } from '../../core/core.types'
import { IAppState } from '../../core/redux/RootState'
import { initHome } from './home.action'

const Home:React.FC<IDefaultComponent> = () => {
    const { loading } = useSelector((store: IAppState) => store.Home)
    const dispatch = useDispatch()

    const btnAction = () => {
        // initialising home and fetch videos
        dispatch(initHome())
    }

    return (
        <div>
            <header>
                <HamburgerNav />
            </header>
            <main role={'main'}>body</main>
            <footer></footer>
        </div>
    )
}

export default Home
