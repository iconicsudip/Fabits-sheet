import styles from './Navbar.module.scss'
import menuIcon from '../../../../icons/menu.svg'
import notificationIcon from '../../../../icons/notifications.svg'
import accountIcon from '../../../../icons/account_circle.svg'
import { useDispatch } from 'react-redux'
import { setSidebar } from '../../../../store/slices/sidebarSlice'
export default function Navbar() {
    const dispatch = useDispatch()

    const handleSidebar = () => {
        dispatch(setSidebar(false))
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <img src={menuIcon} alt="menu" onClick={handleSidebar} />
                <img className={styles.logo} src="/fabits_logo.png" alt="logo" />
            </div>
            <div className={styles.right}>
                <img src={notificationIcon} alt="notification_icon" />
                <img src={accountIcon} alt="account_icon" />
            </div>
        </div>
    )
}
