import styles from './InsuranceCard.module.scss'
import insuranceIcon from '../../icons/admin_panel_settings.svg'

export default function InsuranceCard() {
    return (
        <div className={styles.insurance_card}>
            <img src={insuranceIcon} alt="admin-panel" />
            <div className={styles.heading}>
                <h4>Insurance</h4>
                <p className={styles.sub_text}>Secure your loved ones’ future</p>
            </div>
        </div>
    )
}
