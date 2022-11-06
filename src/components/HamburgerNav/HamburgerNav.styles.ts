import { createUseStyles } from "react-jss"

export const HamburgerNavStyles = createUseStyles({
    menuContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 16
    },
    searchWithIcon: {
        flex: 1,
        display: 'flex'
    },
    logo: {
        maxWidth: 160,
        width: '100%',
        margin: '8px 16px',
        cursor: 'pointer'
    },
    notifyBell: {
        margin: '0 12px',
        position: 'relative',
        cursor: 'pointer'
    },
    rightMenu: {
        display: 'flex'
    },
    notificationCount: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        borderRadius: '10px',
        padding: 2,
        width: 10,
        height: 10,
        fontSize: 8,
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 700
    },
    icons: {
        cursor: 'pointer'
    },
    searchInput: {
        padding: '8px 16px',
        marginLeft: 48,
        width: 350,
        border: '1px solid #ccc'
    },
    submitBtn: {
        border: '1px solid #ccc',
        background: 'none'
    }
})
