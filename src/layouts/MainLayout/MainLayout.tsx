import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import useWindowWidth from '../../hooks/useWindowWidth'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import { setSidebar } from '../../store/slices/sidebarSlice'

export default function MainLayout() {
    const { isCollapsed } = useSelector((state: RootState) => state.sidebarDetails)
    const { isMobile } = useWindowWidth()
    const dispatch = useDispatch()

    useEffect(() => {
        if(isMobile && !isCollapsed){
            dispatch(setSidebar(true))
        }else{
            dispatch(setSidebar(false))
        }
    }, [isMobile])
    return (
        <div>
            {isMobile && <Navbar />}
            <div className={`${styles.main_layout} ${isCollapsed?isMobile ? styles.mobile_collapsed : styles.collapsed:''} ${isMobile ? styles.mobile : ''}`}>
                <Outlet />
            </div>
        </div>
    )
}
