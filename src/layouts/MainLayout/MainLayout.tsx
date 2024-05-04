import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import useWindowWidth from '../../hooks/useWindowWidth'
import Navbar from './components/Navbar'

export default function MainLayout() {
    const { isMobile } = useWindowWidth()
    return (
        <div>
            {isMobile && <Navbar />}
            <div className={`${styles.main_layout} ${isMobile ? styles.mobile : ''}`}>
                <Outlet />
            </div>
        </div>
    )
}
