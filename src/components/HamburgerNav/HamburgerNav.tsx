import React, { useState } from 'react'
import { Bell, Menu, Search, User } from 'react-feather'
import { IHamburgerNav } from './IHamburgerNav.types'
import FlashTubeLogo from './../../assets/img/flashtube-logo.png'
import { HamburgerNavStyles } from './HamburgerNav.styles'

const HamburgerNav:React.FC<IHamburgerNav> = () => {
  const [search, setSearch] = useState('')
  const classes = HamburgerNavStyles()

  return (
    <div className={classes.menuContainer}>
        <Menu className={classes.icons} />
        <img src={FlashTubeLogo} alt={'flashtube'} className={classes.logo} />
        <div className={classes.searchWithIcon}>
            <input 
                type={'text'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={'Search..'}
                className={classes.searchInput}
            />
            <button type={'button'} className={classes.submitBtn}>
                <Search />
            </button>
        </div>
        <div className={classes.rightMenu}>
            <div className={classes.notifyBell}>
                <Bell />
                <span className={classes.notificationCount}>{1}</span>
            </div>
            <User className={classes.icons} />
        </div>
    </div>
  )
}

export default HamburgerNav
