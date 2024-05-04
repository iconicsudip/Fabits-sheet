import styles from './Navbar.module.scss'
import menuIcon from '../../../../icons/menu.svg'
import notificationIcon from '../../../../icons/notifications.svg'
import accountIcon from '../../../../icons/account_circle.svg'
export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <img src={menuIcon} alt="menu"  />
                <img className={styles.logo} src="/fabits_logo.png" alt="logo" />
            </div>
            <div className={styles.right}>
                <img src={notificationIcon} alt="notification_icon" />
                <img src={accountIcon} alt="account_icon" />
            </div>
        </div>
    )
}
